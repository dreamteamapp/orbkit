import { type JSX } from 'react';
interface ColorPaletteProps {
    value: string;
    onChange: (color: string) => void;
    colors?: string[];
}
/**
 * Grid of preset color swatches. Selected swatch gets a ring outline.
 * Pass `colors` to override the default 32-color set.
 */
export declare function ColorPalette({ value, onChange, colors }: ColorPaletteProps): JSX.Element;
export {};
//# sourceMappingURL=color-palette.d.ts.map