import { type JSX, useCallback, useEffect, useRef } from 'react';
import type { GrainProps } from '../types';

/**
 * Grain — A canvas-based noise overlay.
 *
 * Renders random grayscale noise onto a canvas element
 * with mix-blend-mode: overlay for a film grain effect.
 */
export function Grain({ intensity = 0.35, className, style }: GrainProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const renderNoise = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas.getBoundingClientRect();
    // Skip when the canvas hasn't been laid out yet — createImageData throws on 0 dims.
    // ResizeObserver below re-runs this once the element gets real dimensions.
    if (width <= 0 || height <= 0) return;

    canvas.width = width;
    canvas.height = height;

    const imageData = ctx.createImageData(width, height);
    const { data } = imageData;

    for (let i = 0; i < data.length; i += 4) {
      const value = Math.random() * 255;
      data[i] = value;
      data[i + 1] = value;
      data[i + 2] = value;
      data[i + 3] = 255;
    }

    ctx.putImageData(imageData, 0, 0);
  }, []);

  useEffect(() => {
    renderNoise();

    const canvas = canvasRef.current;
    if (!canvas || typeof ResizeObserver === 'undefined') {
      const handleResize = () => renderNoise();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }

    const observer = new ResizeObserver(() => renderNoise());
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [renderNoise]);

  // Map intensity 0-1 to opacity 0-0.5
  const opacity = intensity * 0.5;

  return (
    <canvas
      ref={canvasRef}
      className={className ? `orbkit-grain ${className}` : 'orbkit-grain'}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        mixBlendMode: 'overlay',
        opacity,
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
}
