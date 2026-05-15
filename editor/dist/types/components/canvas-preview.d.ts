import { type JSX } from 'react';
import type { EditorAction, EditorState } from '../types';
interface CanvasPreviewProps {
    state: EditorState;
    dispatch: (action: EditorAction) => void;
}
/** Live preview of the orb scene with draggable handles for each orb. */
export declare function CanvasPreview({ state, dispatch }: CanvasPreviewProps): JSX.Element;
export {};
//# sourceMappingURL=canvas-preview.d.ts.map