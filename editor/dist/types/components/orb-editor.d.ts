import { type JSX } from 'react';
import type { EditorState } from '../types';
interface OrbEditorProps {
    /** Controlled mode: current editor state. */
    value?: EditorState;
    /** Controlled mode: called on every state change. */
    onChange?: (state: EditorState) => void;
    /** Uncontrolled mode: initial state. */
    defaultValue?: EditorState;
    /** Additional CSS class name. */
    className?: string;
}
/**
 * OrbEditor — Visual editor for designing orbkit scenes.
 *
 * Supports controlled (value/onChange) and uncontrolled (defaultValue) patterns.
 * Renders a live preview with draggable orb handles and control panels.
 */
export declare function OrbEditor({ value, onChange, defaultValue, className, }: OrbEditorProps): JSX.Element;
export {};
//# sourceMappingURL=orb-editor.d.ts.map