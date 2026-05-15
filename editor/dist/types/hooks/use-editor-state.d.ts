import type { EditorAction, EditorState } from '../types';
declare const DEFAULT_STATE: EditorState;
export declare function editorReducer(state: EditorState, action: EditorAction): EditorState;
/**
 * Central state management for the editor.
 * Supports controlled (value/onChange) and uncontrolled (defaultValue) patterns.
 */
export default function useEditorState(value?: EditorState, defaultValue?: EditorState, onChange?: (state: EditorState) => void): [EditorState, (action: EditorAction) => void];
export { DEFAULT_STATE };
//# sourceMappingURL=use-editor-state.d.ts.map