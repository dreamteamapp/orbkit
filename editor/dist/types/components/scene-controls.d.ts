import type { JSX } from 'react';
import type { EditorAction, EditorState } from '../types';
interface SceneControlsProps {
    state: EditorState;
    dispatch: (action: EditorAction) => void;
}
/** Scene-level controls: background, saturation, grain, breathing, renderer. */
export declare function SceneControls({ state, dispatch }: SceneControlsProps): JSX.Element;
export {};
//# sourceMappingURL=scene-controls.d.ts.map