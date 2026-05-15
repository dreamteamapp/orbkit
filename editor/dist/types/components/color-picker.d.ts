import type { JSX } from 'react';
interface ColorPickerProps {
    value: string;
    onChange: (color: string) => void;
    label?: string;
}
/** Hybrid color picker: native <input type="color"> + hex text input. */
export declare function ColorPicker({ value, onChange, label }: ColorPickerProps): JSX.Element;
export {};
//# sourceMappingURL=color-picker.d.ts.map