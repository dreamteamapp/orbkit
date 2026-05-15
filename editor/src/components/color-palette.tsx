import { type JSX } from 'react';

interface ColorPaletteProps {
  value: string;
  onChange: (color: string) => void;
  colors?: string[];
}

/**
 * Default 32-color grid: blues/purples/pinks → warms → teals/whites/grays → blacks.
 * Mirrors the DreamTeam.io gradient editor palette.
 */
const DEFAULT_PALETTE = [
  '#4F9CF9', '#1E40AF', '#6D28D9', '#7C3AED', '#A78BFA', '#D8B4FE', '#EC4899', '#F472B6',
  '#F87171', '#F97316', '#F59E0B', '#FB7185', '#EF4444', '#DC2626', '#22C55E', '#15803D',
  '#0F766E', '#06B6D4', '#22D3EE', '#60A5FA', '#FAFAFA', '#E5E7EB', '#9CA3AF', '#6B7280',
  '#4B5563', '#1F2937', '#000000',
];

const normalize = (hex: string): string => hex.toLowerCase();

/**
 * Grid of preset color swatches. Selected swatch gets a ring outline.
 * Pass `colors` to override the default 32-color set.
 */
export function ColorPalette({ value, onChange, colors = DEFAULT_PALETTE }: ColorPaletteProps): JSX.Element {
  const normalizedValue = normalize(value);
  return (
    <div className="orbkit-editor-palette">
      {colors.map((c) => {
        const selected = normalize(c) === normalizedValue;
        return (
          <button
            key={c}
            type="button"
            className={selected ? 'orbkit-editor-palette-swatch orbkit-editor-palette-swatch--selected' : 'orbkit-editor-palette-swatch'}
            style={{ backgroundColor: c }}
            onClick={() => onChange(c)}
            aria-label={`Choose ${c}`}
            aria-pressed={selected}
          />
        );
      })}
    </div>
  );
}
