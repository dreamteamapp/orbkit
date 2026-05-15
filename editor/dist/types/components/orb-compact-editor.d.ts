import { type JSX } from 'react';
import type { EditorState } from '../types';
interface OrbCompactEditorProps {
    /** Controlled mode: current editor state. */
    value?: EditorState;
    /** Controlled mode: called on every state change. */
    onChange?: (state: EditorState) => void;
    /** Uncontrolled mode: initial state. */
    defaultValue?: EditorState;
    /** Optional override for the Selected Point color palette. */
    colorPalette?: string[];
    /** Additional CSS class name. */
    className?: string;
}
/**
 * OrbCompactEditor — A focused, sidebar-shaped variant of OrbEditor.
 *
 * Designed to live in a narrow side panel. Renders only the controls a
 * casual user needs to dial in a gradient: preset row, draggable color
 * points (with optional symmetry lock), per-point color/radius, and global
 * vibrancy/grain.
 *
 * Trade-offs vs. {@link OrbEditor}:
 *   - no renderer picker (always uses scene default)
 *   - no breathing/export controls
 *   - no add-orb button (clicking the canvas adds an orb, like OrbEditor)
 *
 * For the kitchen-sink editor with all controls, use {@link OrbEditor}.
 */
export declare function OrbCompactEditor({ value, onChange, defaultValue, colorPalette, className, }: OrbCompactEditorProps): JSX.Element;
export {};
//# sourceMappingURL=orb-compact-editor.d.ts.map