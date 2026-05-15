import type { UseDragOptions } from '../types';
/**
 * Hook for drag interactions on the canvas preview.
 * Returns pointerdown handler — attach to drag handles.
 * Computes normalized [0-1] position relative to the container.
 */
export default function useDrag({ onDrag, containerRef }: UseDragOptions): {
    onPointerDown: (e: React.PointerEvent) => void;
};
//# sourceMappingURL=use-drag.d.ts.map