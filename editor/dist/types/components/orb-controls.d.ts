import type { JSX } from 'react';
import type { EditorAction, EditorOrb } from '../types';
interface OrbControlsProps {
    orb: EditorOrb;
    dispatch: (action: EditorAction) => void;
}
/** Controls for the currently selected orb: color, size, blur, blend mode. */
export declare function OrbControls({ orb, dispatch }: OrbControlsProps): JSX.Element;
export {};
//# sourceMappingURL=orb-controls.d.ts.map