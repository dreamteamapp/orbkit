import type { JSX } from 'react';
import type { EditorAction, EditorOrb } from '../types';
interface OrbListProps {
    orbs: EditorOrb[];
    selectedOrbId: string | null;
    dispatch: (action: EditorAction) => void;
}
/** Orb selection list with color swatches, select, and delete. */
export declare function OrbList({ orbs, selectedOrbId, dispatch }: OrbListProps): JSX.Element;
export {};
//# sourceMappingURL=orb-list.d.ts.map