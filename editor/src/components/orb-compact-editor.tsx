import { type JSX, useMemo } from 'react';
import { type Preset, presets } from '@dreamteamapp/orbkit';
import useEditorState from '../hooks/use-editor-state';
import type { EditorOrb, EditorState } from '../types';
import { CanvasPreview } from './canvas-preview';
import { ColorPalette } from './color-palette';
import { Slider } from './slider';

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

const presetEntries: [string, Preset][] = Object.entries(presets);

const presetToConfig = (preset: Preset) => ({
  background: preset.backgroundColor,
  saturation: preset.saturation,
  grain: preset.grain,
  breathing: preset.breathing,
  orbs: preset.points.map(
    (pt, i): EditorOrb => ({
      id: `preset-${i}`,
      color: pt.color,
      position: pt.position,
      size: pt.radius,
      blur: pt.blur ?? 40,
      opacity: pt.opacity ?? 0.8,
      blendMode: pt.blendMode ?? 'screen',
      drift: pt.drift ?? true,
      wavy: pt.wavy ?? false,
      interactive: pt.interactive ?? false,
    }),
  ),
});

/**
 * OrbCompactEditor — A focused, sidebar-shaped variant of OrbEditor.
 *
 * Designed to live in a narrow side panel. Renders only the controls a
 * casual user needs to dial in a gradient: preset row, draggable color
 * points, per-point color/radius, and global vibrancy/grain.
 *
 * Trade-offs vs. {@link OrbEditor}:
 *   - no renderer picker (always uses scene default)
 *   - no breathing/symmetric-lock/export controls
 *   - no add-orb button (clicking the canvas adds an orb, like OrbEditor)
 *
 * For the kitchen-sink editor with all controls, use {@link OrbEditor}.
 */
export function OrbCompactEditor({
  value,
  onChange,
  defaultValue,
  colorPalette,
  className,
}: OrbCompactEditorProps): JSX.Element {
  const [state, dispatch] = useEditorState(value, defaultValue, onChange);

  const selectedOrb = useMemo(
    () => (state.selectedOrbId ? state.orbs.find((o) => o.id === state.selectedOrbId) : undefined),
    [state.selectedOrbId, state.orbs],
  );

  return (
    <div className={className ? `orbkit-compact-editor ${className}` : 'orbkit-compact-editor'}>
      <section className="orbkit-compact-editor-section">
        <h3 className="orbkit-editor-section-title">Presets</h3>
        <div className="orbkit-compact-editor-preset-row">
          {presetEntries.map(([name, preset]) => (
            <button
              key={name}
              type="button"
              className="orbkit-compact-editor-preset-thumb"
              onClick={() => dispatch({ type: 'APPLY_PRESET', config: presetToConfig(preset) })}
              title={preset.label}
              style={{ background: preset.backgroundColor }}
            >
              {preset.points.map((pt) => (
                <span
                  key={`${name}-${pt.id}`}
                  className="orbkit-editor-preset-dot"
                  style={{
                    backgroundColor: pt.color,
                    left: `${pt.position[0] * 100}%`,
                    top: `${pt.position[1] * 100}%`,
                    width: `${pt.radius * 40}%`,
                    height: `${pt.radius * 40}%`,
                  }}
                />
              ))}
              <span className="orbkit-compact-editor-preset-label">{preset.label}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="orbkit-compact-editor-section">
        <h3 className="orbkit-editor-section-title">Color Points</h3>
        <div className="orbkit-compact-editor-canvas-wrap">
          <CanvasPreview state={state} dispatch={dispatch} />
        </div>
        <p className="orbkit-compact-editor-caption">Drag points to reposition</p>
      </section>

      {selectedOrb ? (
        <section className="orbkit-compact-editor-section">
          <h3 className="orbkit-editor-section-title">Selected Point</h3>
          <label className="orbkit-compact-editor-sublabel" htmlFor="orbkit-compact-hex-input">
            Color
          </label>
          <ColorPalette
            value={selectedOrb.color}
            onChange={(c) =>
              dispatch({ type: 'UPDATE_ORB', id: selectedOrb.id, changes: { color: c } })
            }
            colors={colorPalette}
          />
          <input
            id="orbkit-compact-hex-input"
            type="text"
            className="orbkit-compact-editor-hex-input"
            value={selectedOrb.color}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_ORB',
                id: selectedOrb.id,
                changes: { color: e.target.value },
              })
            }
            aria-label="Color hex"
          />
          <Slider
            label="Radius"
            value={Math.round(selectedOrb.size * 100)}
            min={10}
            max={150}
            onChange={(v) =>
              dispatch({ type: 'UPDATE_ORB', id: selectedOrb.id, changes: { size: v / 100 } })
            }
          />
          <button
            type="button"
            className="orbkit-compact-editor-remove"
            onClick={() => dispatch({ type: 'REMOVE_ORB', id: selectedOrb.id })}
          >
            Remove
          </button>
        </section>
      ) : null}

      <section className="orbkit-compact-editor-section">
        <Slider
          label="Vibrancy"
          value={state.saturation}
          min={0}
          max={100}
          onChange={(v) => dispatch({ type: 'SET_SATURATION', value: v })}
        />
        <Slider
          label="Grain"
          value={state.grain}
          min={0}
          max={100}
          onChange={(v) => dispatch({ type: 'SET_GRAIN', value: v })}
        />
      </section>
    </div>
  );
}
