import type { JSX } from 'react';
interface SliderProps {
    label: string;
    value: number;
    min: number;
    max: number;
    step?: number;
    onChange: (value: number) => void;
}
/** Labeled range slider with current value display and filled track. */
export declare function Slider({ label, value, min, max, step, onChange }: SliderProps): JSX.Element;
export {};
//# sourceMappingURL=slider.d.ts.map