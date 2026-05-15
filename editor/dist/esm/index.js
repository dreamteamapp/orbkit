// editor/src/styles.css
var styles_default = '/* @orbkit/editor \u2014 default styles */\n\n/* \u2500\u2500\u2500 Layout \u2500\u2500\u2500 */\n.orbkit-editor {\n  display: flex;\n  gap: 16px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;\n  font-size: 13px;\n  color: #e0e0e0;\n  background: #141414;\n  border-radius: 12px;\n  padding: 16px;\n  box-sizing: border-box;\n}\n\n.orbkit-editor *,\n.orbkit-editor *::before,\n.orbkit-editor *::after {\n  box-sizing: border-box;\n}\n\n.orbkit-editor-main {\n  flex: 1;\n  min-width: 0;\n}\n\n.orbkit-editor-sidebar {\n  width: 280px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  overflow-y: auto;\n  max-height: 100%;\n}\n\n/* \u2500\u2500\u2500 Section titles \u2500\u2500\u2500 */\n.orbkit-editor-section-title {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #666;\n  margin: 0 0 8px;\n}\n\n/* \u2500\u2500\u2500 Canvas preview \u2500\u2500\u2500 */\n.orbkit-editor-canvas {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 16 / 10;\n  border-radius: 10px;\n  overflow: hidden;\n  cursor: crosshair;\n}\n\n.orbkit-editor-canvas .orbkit-scene {\n  width: 100%;\n  height: 100%;\n}\n\n/* \u2500\u2500\u2500 Drag handles \u2500\u2500\u2500 */\n.orbkit-editor-drag-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid;\n  background: rgba(255, 255, 255, 0.15);\n  transform: translate(-50%, -50%);\n  cursor: grab;\n  transition: box-shadow 0.15s ease, transform 0.1s ease;\n  padding: 0;\n  outline: none;\n}\n\n.orbkit-editor-drag-handle:hover {\n  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);\n  transform: translate(-50%, -50%) scale(1.15);\n}\n\n.orbkit-editor-drag-handle--selected {\n  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.35);\n  background: rgba(255, 255, 255, 0.3);\n}\n\n.orbkit-editor-drag-handle:active {\n  cursor: grabbing;\n  transform: translate(-50%, -50%) scale(0.95);\n}\n\n/* \u2500\u2500\u2500 Presets \u2500\u2500\u2500 */\n.orbkit-editor-presets-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\n.orbkit-editor-presets-header .orbkit-editor-section-title {\n  margin: 0;\n}\n\n.orbkit-editor-preset-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(56px, 1fr));\n  gap: 6px;\n}\n\n.orbkit-editor-preset-thumb {\n  position: relative;\n  aspect-ratio: 1;\n  border-radius: 8px;\n  border: 2px solid transparent;\n  cursor: pointer;\n  overflow: hidden;\n  padding: 0;\n  transition: border-color 0.15s ease, transform 0.12s ease;\n}\n\n.orbkit-editor-preset-thumb:hover {\n  border-color: rgba(255, 255, 255, 0.3);\n  transform: scale(1.05);\n}\n\n.orbkit-editor-preset-dot {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(6px);\n  opacity: 0.8;\n  transform: translate(-50%, -50%);\n}\n\n.orbkit-editor-preset-name {\n  position: absolute;\n  bottom: 2px;\n  left: 0;\n  right: 0;\n  text-align: center;\n  font-size: 8px;\n  color: rgba(255, 255, 255, 0.6);\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  padding: 0 2px;\n}\n\n/* \u2500\u2500\u2500 Orb list \u2500\u2500\u2500 */\n.orbkit-editor-orb-list-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\n.orbkit-editor-orb-list-header .orbkit-editor-section-title {\n  margin: 0;\n}\n\n.orbkit-editor-orb-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 8px;\n  border-radius: 6px;\n  border: none;\n  background: transparent;\n  color: #e0e0e0;\n  cursor: pointer;\n  width: 100%;\n  text-align: left;\n  font-size: 13px;\n  transition: background 0.12s ease;\n}\n\n.orbkit-editor-orb-item:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n\n.orbkit-editor-orb-item--selected {\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.orbkit-editor-orb-swatch {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n}\n\n.orbkit-editor-orb-delete {\n  margin-left: auto;\n  padding: 2px 6px;\n  background: transparent;\n  border: none;\n  color: #666;\n  cursor: pointer;\n  border-radius: 4px;\n  font-size: 14px;\n  line-height: 1;\n}\n\n.orbkit-editor-orb-delete:hover {\n  color: #f44;\n  background: rgba(255, 68, 68, 0.1);\n}\n\n/* \u2500\u2500\u2500 Controls (orb + scene) \u2500\u2500\u2500 */\n.orbkit-editor-controls {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.orbkit-editor-control-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.orbkit-editor-label {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 12px;\n  color: #999;\n}\n\n.orbkit-editor-label span {\n  display: flex;\n  justify-content: space-between;\n}\n\n/* \u2500\u2500\u2500 Slider \u2500\u2500\u2500 */\n.orbkit-editor-slider {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.orbkit-editor-slider-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n  color: #888;\n}\n\n.orbkit-editor-slider-value {\n  font-variant-numeric: tabular-nums;\n  color: #bbb;\n  font-size: 11px;\n  min-width: 24px;\n  text-align: right;\n}\n\n.orbkit-editor-slider input[type="range"] {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 100%;\n  height: 6px;\n  border-radius: 3px;\n  background: linear-gradient(\n    to right,\n    rgba(255, 255, 255, 0.35) 0%,\n    rgba(255, 255, 255, 0.35) var(--slider-percent, 0%),\n    #2a2a2a var(--slider-percent, 0%),\n    #2a2a2a 100%\n  );\n  outline: none;\n  cursor: pointer;\n  transition: background 0.1s ease;\n}\n\n.orbkit-editor-slider input[type="range"]:hover {\n  background: linear-gradient(\n    to right,\n    rgba(255, 255, 255, 0.45) 0%,\n    rgba(255, 255, 255, 0.45) var(--slider-percent, 0%),\n    #333 var(--slider-percent, 0%),\n    #333 100%\n  );\n}\n\n.orbkit-editor-slider input[type="range"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff;\n  cursor: pointer;\n  border: none;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n  transition: transform 0.12s ease, box-shadow 0.12s ease;\n}\n\n.orbkit-editor-slider input[type="range"]::-webkit-slider-thumb:hover {\n  transform: scale(1.15);\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);\n}\n\n.orbkit-editor-slider input[type="range"]:active::-webkit-slider-thumb {\n  transform: scale(0.95);\n}\n\n.orbkit-editor-slider input[type="range"]::-moz-range-thumb {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff;\n  cursor: pointer;\n  border: none;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n}\n\n.orbkit-editor-slider input[type="range"]::-moz-range-progress {\n  background: rgba(255, 255, 255, 0.35);\n  border-radius: 3px;\n  height: 6px;\n}\n\n.orbkit-editor-slider input[type="range"]::-moz-range-track {\n  background: #2a2a2a;\n  border-radius: 3px;\n  height: 6px;\n}\n\n/* \u2500\u2500\u2500 Color picker \u2500\u2500\u2500 */\n.orbkit-editor-color-picker {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.orbkit-editor-color-picker input[type="color"] {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 8px;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n}\n\n.orbkit-editor-color-picker input[type="color"]::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n\n.orbkit-editor-color-picker input[type="color"]::-webkit-color-swatch {\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n}\n\n.orbkit-editor-color-picker input[type="text"] {\n  flex: 1;\n  background: #1e1e1e;\n  border: 1px solid #333;\n  border-radius: 6px;\n  color: #e0e0e0;\n  font-family: monospace;\n  font-size: 12px;\n  padding: 6px 8px;\n  outline: none;\n  transition: border-color 0.15s ease;\n}\n\n.orbkit-editor-color-picker input[type="text"]:focus {\n  border-color: rgba(255, 255, 255, 0.3);\n}\n\n/* \u2500\u2500\u2500 Select (blend mode) \u2500\u2500\u2500 */\n.orbkit-editor-select {\n  background: #1e1e1e;\n  border: 1px solid #333;\n  border-radius: 6px;\n  color: #e0e0e0;\n  font-size: 12px;\n  padding: 6px 8px;\n  outline: none;\n  cursor: pointer;\n  transition: border-color 0.15s ease;\n  width: 100%;\n}\n\n.orbkit-editor-select:focus {\n  border-color: rgba(255, 255, 255, 0.3);\n}\n\n/* \u2500\u2500\u2500 Renderer toggle \u2500\u2500\u2500 */\n.orbkit-editor-renderer-toggle {\n  display: flex;\n  gap: 4px;\n}\n\n.orbkit-editor-renderer-btn {\n  flex: 1;\n  padding: 6px 8px;\n  border: 1px solid #333;\n  border-radius: 6px;\n  background: #1a1a1a;\n  color: #888;\n  font-size: 11px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n\n.orbkit-editor-renderer-btn:hover {\n  border-color: #555;\n  color: #ccc;\n  background: #222;\n}\n\n.orbkit-editor-renderer-btn--active {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n  border-color: rgba(255, 255, 255, 0.25);\n}\n\n/* \u2500\u2500\u2500 Buttons \u2500\u2500\u2500 */\n.orbkit-editor-btn {\n  padding: 6px 12px;\n  border-radius: 6px;\n  border: 1px solid #333;\n  background: #1a1a1a;\n  color: #e0e0e0;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n\n.orbkit-editor-btn:hover {\n  border-color: #555;\n  background: #222;\n}\n\n.orbkit-editor-btn:active {\n  transform: scale(0.97);\n}\n\n.orbkit-editor-btn--randomize {\n  font-size: 11px;\n  padding: 4px 10px;\n}\n\n.orbkit-editor-btn--add {\n  font-size: 11px;\n  padding: 4px 10px;\n}\n\n/* \u2500\u2500\u2500 Toggle group (drift/wavy/interactive) \u2500\u2500\u2500 */\n.orbkit-editor-toggle-group {\n  display: flex;\n  gap: 8px;\n  margin-top: 6px;\n  flex-wrap: wrap;\n}\n\n.orbkit-editor-toggle {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #888;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  transition: all 0.15s ease;\n  user-select: none;\n}\n\n.orbkit-editor-toggle:hover {\n  background: rgba(255, 255, 255, 0.04);\n  color: #bbb;\n}\n\n.orbkit-editor-toggle:has(input:checked) {\n  color: #ddd;\n  border-color: rgba(255, 255, 255, 0.12);\n  background: rgba(255, 255, 255, 0.06);\n}\n\n.orbkit-editor-toggle input[type="checkbox"] {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 14px;\n  height: 14px;\n  border-radius: 4px;\n  border: 1.5px solid #555;\n  background: #1e1e1e;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.15s ease;\n  flex-shrink: 0;\n}\n\n.orbkit-editor-toggle input[type="checkbox"]:checked {\n  background: rgba(255, 255, 255, 0.85);\n  border-color: rgba(255, 255, 255, 0.85);\n}\n\n.orbkit-editor-toggle input[type="checkbox"]:checked::after {\n  content: "";\n  position: absolute;\n  left: 3.5px;\n  top: 1px;\n  width: 4px;\n  height: 7px;\n  border: solid #141414;\n  border-width: 0 1.5px 1.5px 0;\n  transform: rotate(45deg);\n}\n\n/* \u2500\u2500\u2500 Field (label + control) \u2500\u2500\u2500 */\n.orbkit-editor-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n/* \u2500\u2500\u2500 Export \u2500\u2500\u2500 */\n.orbkit-editor-export-buttons {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.orbkit-editor-btn--export,\n.orbkit-editor-btn--download {\n  flex: 1;\n  min-width: 80px;\n  text-align: center;\n  font-size: 11px;\n  padding: 5px 8px;\n}\n\n.orbkit-editor-btn--download {\n  flex-basis: 100%;\n}\n';

// editor/src/inject-styles.ts
var STYLE_ID = "orbkit-editor-styles";
function injectEditorStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = styles_default;
  document.head.appendChild(style);
}
injectEditorStyles();

// editor/src/components/orb-editor.tsx
import { useMemo } from "react";

// editor/src/hooks/use-editor-state.ts
import { useCallback, useEffect, useReducer, useRef } from "react";

// editor/src/utils/symmetry.ts
var CENTER = [0.5, 0.5];
function computeSymmetricalPositions(movedPosition, orbCount, movedIndex) {
  if (orbCount <= 0) return [];
  if (orbCount === 1) return [movedPosition];
  const dx = movedPosition[0] - CENTER[0];
  const dy = movedPosition[1] - CENTER[1];
  const radius = Math.sqrt(dx * dx + dy * dy);
  const baseAngle = Math.atan2(dy, dx);
  const step = 2 * Math.PI / orbCount;
  const angle0 = baseAngle - movedIndex * step;
  return Array.from({ length: orbCount }, (_, i) => {
    const angle = angle0 + i * step;
    const x = Math.max(0, Math.min(1, CENTER[0] + radius * Math.cos(angle)));
    const y = Math.max(0, Math.min(1, CENTER[1] + radius * Math.sin(angle)));
    return [x, y];
  });
}

// editor/src/hooks/use-editor-state.ts
var DEFAULT_STATE = {
  background: "#0a0a0a",
  saturation: 80,
  grain: 25,
  breathing: 20,
  locked: false,
  orbs: [],
  selectedOrbId: null,
  renderer: "css"
};
function editorReducer(state, action) {
  switch (action.type) {
    case "SET_BACKGROUND":
      return { ...state, background: action.color };
    case "SET_SATURATION":
      return { ...state, saturation: action.value };
    case "SET_GRAIN":
      return { ...state, grain: action.value };
    case "SET_BREATHING":
      return { ...state, breathing: action.value };
    case "SET_RENDERER":
      return { ...state, renderer: action.renderer };
    case "SELECT_ORB":
      return { ...state, selectedOrbId: action.id };
    case "ADD_ORB":
      return { ...state, orbs: [...state.orbs, action.orb], selectedOrbId: action.orb.id };
    case "REMOVE_ORB": {
      const orbs = state.orbs.filter((o) => o.id !== action.id);
      return {
        ...state,
        orbs,
        selectedOrbId: state.selectedOrbId === action.id ? null : state.selectedOrbId
      };
    }
    case "UPDATE_ORB":
      return {
        ...state,
        orbs: state.orbs.map((o) => o.id === action.id ? { ...o, ...action.changes } : o)
      };
    case "MOVE_ORB":
      return {
        ...state,
        orbs: state.orbs.map((o) => o.id === action.id ? { ...o, position: action.position } : o)
      };
    case "SET_LOCKED":
      return { ...state, locked: action.locked };
    case "MOVE_ORB_LOCKED": {
      const movedIndex = state.orbs.findIndex((o) => o.id === action.id);
      if (movedIndex === -1) return state;
      const positions = computeSymmetricalPositions(action.position, state.orbs.length, movedIndex);
      return {
        ...state,
        orbs: state.orbs.map((o, i) => ({ ...o, position: positions[i] ?? o.position }))
      };
    }
    case "APPLY_PRESET": {
      const preset = action.config;
      return {
        ...state,
        ...preset,
        selectedOrbId: null
      };
    }
    case "RANDOMIZE":
      return { ...action.config, selectedOrbId: null };
    case "LOAD_CONFIG": {
      const config = action.config;
      return {
        ...config,
        locked: config.locked ?? false,
        orbs: config.orbs.map((o) => {
          const raw = o;
          return {
            ...o,
            opacity: raw.opacity ?? 0.8,
            drift: raw.drift ?? true,
            wavy: raw.wavy ?? false,
            interactive: raw.interactive ?? false
          };
        })
      };
    }
  }
}
function useEditorState(value, defaultValue, onChange) {
  const [state, dispatch] = useReducer(editorReducer, value ?? defaultValue ?? DEFAULT_STATE);
  const isControlled = value !== void 0;
  const wasControlledRef = useRef(isControlled);
  useEffect(() => {
    if (wasControlledRef.current !== isControlled) {
      console.warn(
        "OrbEditor: Switching between controlled and uncontrolled mode is not supported."
      );
    }
    wasControlledRef.current = isControlled;
  }, [isControlled]);
  useEffect(() => {
    if (isControlled && value) {
      dispatch({ type: "LOAD_CONFIG", config: value });
    }
  }, [value, isControlled]);
  const stableDispatch = useCallback(
    (action) => {
      if (isControlled && value) {
        const nextState = editorReducer(value, action);
        onChange?.(nextState);
      } else {
        dispatch(action);
      }
    },
    [isControlled, value, onChange]
  );
  return [isControlled && value ? value : state, stableDispatch];
}

// editor/src/components/canvas-preview.tsx
import { Orb, OrbScene } from "@dreamteamapp/orbkit";
import { useCallback as useCallback3, useRef as useRef3 } from "react";

// editor/src/hooks/use-drag.ts
import { useCallback as useCallback2, useRef as useRef2 } from "react";
function useDrag({ onDrag, containerRef }) {
  const draggingRef = useRef2(false);
  const getPosition = useCallback2(
    (clientX, clientY) => {
      const el = containerRef.current;
      if (!el) return [0.5, 0.5];
      const rect = el.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
      return [x, y];
    },
    [containerRef]
  );
  const onPointerDown = useCallback2(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      draggingRef.current = true;
      const target = e.target;
      target.setPointerCapture(e.pointerId);
      const pointerId = e.pointerId;
      const onPointerMove = (ev) => {
        if (!draggingRef.current) return;
        onDrag(getPosition(ev.clientX, ev.clientY));
      };
      const cleanup = () => {
        draggingRef.current = false;
        try {
          target.releasePointerCapture(pointerId);
        } catch {
        }
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", cleanup);
        window.removeEventListener("pointercancel", cleanup);
      };
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", cleanup);
      window.addEventListener("pointercancel", cleanup);
    },
    [onDrag, getPosition]
  );
  return { onPointerDown };
}

// editor/src/utils/uid.ts
var counter = 0;
function uid(prefix = "orb") {
  return `${prefix}-${Date.now()}-${(counter++).toString(36)}`;
}

// editor/src/components/canvas-preview.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function DragHandle({
  position,
  color,
  selected,
  onSelect,
  onDrag,
  containerRef
}) {
  const { onPointerDown } = useDrag({ onDrag, containerRef });
  const [px, py] = position;
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: `orbkit-editor-drag-handle${selected ? " orbkit-editor-drag-handle--selected" : ""}`,
      style: {
        left: `${px * 100}%`,
        top: `${py * 100}%`,
        borderColor: color
      },
      onPointerDown: (e) => {
        onSelect();
        onPointerDown(e);
      },
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      },
      "aria-label": `Drag orb at ${Math.round(px * 100)}%, ${Math.round(py * 100)}%`
    }
  );
}
function CanvasPreview({ state, dispatch }) {
  const containerRef = useRef3(null);
  const addOrbAt = useCallback3(
    (x, y) => {
      dispatch({
        type: "ADD_ORB",
        orb: {
          id: uid(),
          color: `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`,
          position: [x, y],
          size: 0.6,
          blur: 40,
          opacity: 0.8,
          blendMode: "screen",
          drift: true,
          wavy: false,
          interactive: false
        }
      });
    },
    [dispatch]
  );
  const handleClick = useCallback3(
    (e) => {
      if (e.target === e.currentTarget || e.target.classList.contains("orbkit-scene")) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        addOrbAt(x, y);
      }
    },
    [addOrbAt]
  );
  const handleKeyDown = useCallback3(
    (e) => {
      if (e.target !== e.currentTarget) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        addOrbAt(0.5, 0.5);
      }
    },
    [addOrbAt]
  );
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      className: "orbkit-editor-canvas",
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      role: "button",
      tabIndex: 0,
      "aria-label": "Click to add a new orb",
      children: [
        /* @__PURE__ */ jsx(
          OrbScene,
          {
            background: state.background,
            grain: state.grain / 100,
            saturation: state.saturation,
            breathing: state.breathing,
            renderer: state.renderer,
            children: state.orbs.map((orb) => /* @__PURE__ */ jsx(
              Orb,
              {
                color: orb.color,
                position: orb.position,
                size: orb.size,
                blur: orb.blur,
                blendMode: orb.blendMode,
                drift: orb.drift,
                wavy: orb.wavy,
                interactive: orb.interactive,
                style: { opacity: orb.opacity }
              },
              orb.id
            ))
          }
        ),
        state.orbs.map((orb) => /* @__PURE__ */ jsx(
          DragHandle,
          {
            position: orb.position,
            color: orb.color,
            selected: orb.id === state.selectedOrbId,
            onSelect: () => dispatch({ type: "SELECT_ORB", id: orb.id }),
            onDrag: (pos) => dispatch({
              type: state.locked ? "MOVE_ORB_LOCKED" : "MOVE_ORB",
              id: orb.id,
              position: pos
            }),
            containerRef
          },
          orb.id
        ))
      ]
    }
  );
}

// editor/src/components/export-panel.tsx
import { useCallback as useCallback4, useEffect as useEffect2, useRef as useRef4, useState } from "react";

// editor/src/utils/export-css.ts
function exportCSS(state) {
  const lines = [
    ".orbkit-scene {",
    "  position: relative;",
    "  overflow: hidden;",
    "  width: 100%;",
    "  height: 100%;",
    `  background: ${state.background};`,
    "}",
    ""
  ];
  for (const orb of state.orbs) {
    const px = orb.position[0] * 100;
    const py = orb.position[1] * 100;
    lines.push(
      `.orbkit-${orb.id} {`,
      "  position: absolute;",
      "  width: 130%;",
      "  height: 130%;",
      "  top: -15%;",
      "  left: -15%;",
      `  background: radial-gradient(at ${px.toFixed(0)}% ${py.toFixed(0)}%, ${orb.color} 0%, transparent ${(orb.size * 100).toFixed(0)}%);`,
      `  filter: blur(${Math.round(orb.blur)}px);`,
      `  opacity: ${orb.opacity};`,
      `  mix-blend-mode: ${orb.blendMode};`,
      "}",
      ""
    );
  }
  return lines.join("\n");
}

// editor/src/utils/export-json.ts
function exportJSON(state) {
  return JSON.stringify(
    {
      background: state.background,
      saturation: state.saturation,
      grain: state.grain,
      breathing: state.breathing,
      renderer: state.renderer,
      orbs: state.orbs.map((orb) => ({
        color: orb.color,
        position: orb.position,
        size: orb.size,
        blur: orb.blur,
        opacity: orb.opacity,
        blendMode: orb.blendMode,
        drift: orb.drift,
        wavy: orb.wavy,
        interactive: orb.interactive
      }))
    },
    null,
    2
  );
}

// editor/src/utils/export-jsx.ts
function escapeAttr(s) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function exportJSX(state) {
  const orbLines = state.orbs.map((orb) => {
    let line = `  <Orb color="${escapeAttr(orb.color)}" position={[${orb.position[0].toFixed(2)}, ${orb.position[1].toFixed(2)}]} size={${orb.size.toFixed(2)}} blur={${Math.round(orb.blur)}}`;
    if (orb.opacity !== 1) line += ` style={{ opacity: ${orb.opacity.toFixed(2)} }}`;
    line += ` blendMode="${escapeAttr(orb.blendMode)}"`;
    if (orb.drift) line += " drift";
    if (orb.wavy) line += " wavy";
    if (orb.interactive) line += " interactive";
    line += " />";
    return line;
  }).join("\n");
  let sceneLine = `<OrbScene background="${escapeAttr(state.background)}" grain={${(state.grain / 100).toFixed(2)}} breathing={${state.breathing}} saturation={${state.saturation}}`;
  if (state.renderer !== "css") sceneLine += ` renderer="${escapeAttr(state.renderer)}"`;
  sceneLine += ">";
  return `${sceneLine}
${orbLines}
</OrbScene>`;
}

// editor/src/components/export-panel.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function ExportPanel({ state }) {
  const [copiedFormat, setCopiedFormat] = useState(null);
  const timerRef = useRef4(null);
  useEffect2(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  const getExport = useCallback4(
    (format) => {
      switch (format) {
        case "jsx":
          return exportJSX(state);
        case "json":
          return exportJSON(state);
        case "css":
          return exportCSS(state);
      }
    },
    [state]
  );
  const handleCopy = useCallback4(
    (format) => {
      const text = getExport(format);
      navigator.clipboard.writeText(text).then(
        () => {
          setCopiedFormat(format);
          if (timerRef.current) clearTimeout(timerRef.current);
          timerRef.current = setTimeout(() => setCopiedFormat(null), 2e3);
        },
        () => {
        }
      );
    },
    [getExport]
  );
  const handleDownload = useCallback4(() => {
    const json = exportJSON(state);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "orbkit-scene.json";
    a.click();
    URL.revokeObjectURL(url);
  }, [state]);
  return /* @__PURE__ */ jsxs2("div", { className: "orbkit-editor-export", children: [
    /* @__PURE__ */ jsx2("h3", { className: "orbkit-editor-section-title", children: "Export" }),
    /* @__PURE__ */ jsxs2("div", { className: "orbkit-editor-export-buttons", children: [
      ["jsx", "json", "css"].map((format) => /* @__PURE__ */ jsx2(
        "button",
        {
          type: "button",
          className: "orbkit-editor-btn orbkit-editor-btn--export",
          onClick: () => handleCopy(format),
          children: copiedFormat === format ? "Copied!" : `Copy ${format.toUpperCase()}`
        },
        format
      )),
      /* @__PURE__ */ jsx2(
        "button",
        {
          type: "button",
          className: "orbkit-editor-btn orbkit-editor-btn--download",
          onClick: handleDownload,
          children: "Download JSON"
        }
      )
    ] })
  ] });
}

// editor/src/components/color-picker.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var HEX_PATTERN = /^#[0-9a-fA-F]{0,6}$/;
function ColorPicker({ value, onChange, label }) {
  const colorInput = /* @__PURE__ */ jsx3(
    "input",
    {
      type: "color",
      value,
      onChange: (e) => onChange(e.target.value),
      className: "orbkit-editor-color-swatch"
    }
  );
  return /* @__PURE__ */ jsxs3("div", { className: "orbkit-editor-color-picker", children: [
    label ? (
      // biome-ignore lint/a11y/noLabelWithoutControl: color input is rendered as child via JSX variable
      /* @__PURE__ */ jsxs3("label", { className: "orbkit-editor-label", children: [
        label,
        colorInput
      ] })
    ) : colorInput,
    /* @__PURE__ */ jsx3(
      "input",
      {
        type: "text",
        value,
        onChange: (e) => {
          const v = e.target.value;
          if (HEX_PATTERN.test(v)) onChange(v);
        },
        className: "orbkit-editor-color-hex",
        maxLength: 7,
        spellCheck: false
      }
    )
  ] });
}

// editor/src/components/slider.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
function Slider({ label, value, min, max, step = 1, onChange }) {
  const percent = max !== min ? (value - min) / (max - min) * 100 : 0;
  return /* @__PURE__ */ jsxs4("label", { className: "orbkit-editor-slider", children: [
    /* @__PURE__ */ jsxs4("div", { className: "orbkit-editor-slider-header", children: [
      /* @__PURE__ */ jsx4("span", { className: "orbkit-editor-label", children: label }),
      /* @__PURE__ */ jsx4("span", { className: "orbkit-editor-slider-value", children: value })
    ] }),
    /* @__PURE__ */ jsx4(
      "input",
      {
        type: "range",
        min,
        max,
        step,
        value,
        onChange: (e) => onChange(Number(e.target.value)),
        className: "orbkit-editor-slider-input",
        style: { "--slider-percent": `${percent}%` }
      }
    )
  ] });
}

// editor/src/components/orb-controls.tsx
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var BLEND_MODES = [
  "screen",
  "overlay",
  "multiply",
  "hard-light",
  "soft-light",
  "color-dodge",
  "normal",
  "lighten"
];
function OrbControls({ orb, dispatch }) {
  const update = (changes) => {
    dispatch({ type: "UPDATE_ORB", id: orb.id, changes });
  };
  return /* @__PURE__ */ jsxs5("div", { className: "orbkit-editor-orb-controls", children: [
    /* @__PURE__ */ jsx5("h3", { className: "orbkit-editor-section-title", children: "Orb Settings" }),
    /* @__PURE__ */ jsx5(ColorPicker, { label: "Color", value: orb.color, onChange: (color) => update({ color }) }),
    /* @__PURE__ */ jsx5(
      Slider,
      {
        label: "Size",
        value: Math.round(orb.size * 100),
        min: 10,
        max: 100,
        onChange: (v) => update({ size: v / 100 })
      }
    ),
    /* @__PURE__ */ jsx5(
      Slider,
      {
        label: "Blur",
        value: orb.blur,
        min: 0,
        max: 100,
        onChange: (blur) => update({ blur })
      }
    ),
    /* @__PURE__ */ jsx5(
      Slider,
      {
        label: "Opacity",
        value: Math.round(orb.opacity * 100),
        min: 10,
        max: 100,
        onChange: (v) => update({ opacity: v / 100 })
      }
    ),
    /* @__PURE__ */ jsxs5("label", { className: "orbkit-editor-field", children: [
      /* @__PURE__ */ jsx5("span", { className: "orbkit-editor-label", children: "Blend Mode" }),
      /* @__PURE__ */ jsx5(
        "select",
        {
          value: orb.blendMode,
          onChange: (e) => update({ blendMode: e.target.value }),
          className: "orbkit-editor-select",
          children: BLEND_MODES.map((mode) => /* @__PURE__ */ jsx5("option", { value: mode, children: mode }, mode))
        }
      )
    ] }),
    /* @__PURE__ */ jsxs5("div", { className: "orbkit-editor-toggle-group", children: [
      /* @__PURE__ */ jsxs5("label", { className: "orbkit-editor-toggle", children: [
        /* @__PURE__ */ jsx5(
          "input",
          {
            type: "checkbox",
            checked: orb.drift,
            onChange: (e) => update({ drift: e.target.checked })
          }
        ),
        /* @__PURE__ */ jsx5("span", { children: "Drift" })
      ] }),
      /* @__PURE__ */ jsxs5("label", { className: "orbkit-editor-toggle", children: [
        /* @__PURE__ */ jsx5(
          "input",
          {
            type: "checkbox",
            checked: orb.wavy,
            onChange: (e) => update({ wavy: e.target.checked })
          }
        ),
        /* @__PURE__ */ jsx5("span", { children: "Wavy" })
      ] }),
      /* @__PURE__ */ jsxs5("label", { className: "orbkit-editor-toggle", children: [
        /* @__PURE__ */ jsx5(
          "input",
          {
            type: "checkbox",
            checked: orb.interactive,
            onChange: (e) => update({ interactive: e.target.checked })
          }
        ),
        /* @__PURE__ */ jsx5("span", { children: "Interactive" })
      ] })
    ] })
  ] });
}

// editor/src/components/orb-list.tsx
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
function OrbList({ orbs, selectedOrbId, dispatch }) {
  const addOrb = () => {
    dispatch({
      type: "ADD_ORB",
      orb: {
        id: uid(),
        color: `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`,
        position: [0.3 + Math.random() * 0.4, 0.3 + Math.random() * 0.4],
        size: 0.5 + Math.random() * 0.3,
        blur: 30 + Math.random() * 30,
        opacity: 0.8,
        blendMode: "screen",
        drift: true,
        wavy: false,
        interactive: false
      }
    });
  };
  return /* @__PURE__ */ jsxs6("div", { className: "orbkit-editor-orb-list", children: [
    /* @__PURE__ */ jsxs6("div", { className: "orbkit-editor-orb-list-header", children: [
      /* @__PURE__ */ jsx6("h3", { className: "orbkit-editor-section-title", children: "Orbs" }),
      /* @__PURE__ */ jsx6("button", { type: "button", className: "orbkit-editor-btn orbkit-editor-btn--add", onClick: addOrb, children: "+ Add" })
    ] }),
    orbs.map((orb) => /* @__PURE__ */ jsxs6(
      "div",
      {
        className: `orbkit-editor-orb-item${orb.id === selectedOrbId ? " orbkit-editor-orb-item--selected" : ""}`,
        children: [
          /* @__PURE__ */ jsxs6(
            "button",
            {
              type: "button",
              className: "orbkit-editor-orb-item-select",
              onClick: () => dispatch({ type: "SELECT_ORB", id: orb.id }),
              children: [
                /* @__PURE__ */ jsx6("span", { className: "orbkit-editor-orb-swatch", style: { backgroundColor: orb.color } }),
                /* @__PURE__ */ jsx6("span", { className: "orbkit-editor-orb-name", children: orb.color })
              ]
            }
          ),
          /* @__PURE__ */ jsx6(
            "button",
            {
              type: "button",
              className: "orbkit-editor-btn orbkit-editor-btn--delete",
              onClick: () => dispatch({ type: "REMOVE_ORB", id: orb.id }),
              "aria-label": `Remove orb ${orb.color}`,
              children: "\xD7"
            }
          )
        ]
      },
      orb.id
    )),
    orbs.length === 0 && /* @__PURE__ */ jsx6("p", { className: "orbkit-editor-hint", children: 'No orbs yet. Click "+ Add" to create one.' })
  ] });
}

// editor/src/components/preset-gallery.tsx
import { presets } from "@dreamteamapp/orbkit";

// editor/src/utils/random-theme.ts
var BACKGROUNDS = [
  "#0a0a0a",
  "#1a1a1a",
  "#2E2D2C",
  "#3D1C1C",
  "#1a1018",
  "#2D1B4E",
  "#0f0f1a",
  "#0C2340",
  "#0f1a14",
  "#1a2e1a",
  "#1a1918",
  "#3B2F20"
];
function createRng(seed) {
  let s = seed | 0;
  return () => {
    s = s + 1831565813 | 0;
    let t = Math.imul(s ^ s >>> 15, 1 | s);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function randomHex(rng) {
  const h = Math.floor(rng() * 360);
  const s = 40 + Math.floor(rng() * 60);
  const l = 30 + Math.floor(rng() * 40);
  return hslToHex(h, s, l);
}
function hslToHex(h, s, l) {
  const sNorm = s / 100;
  const lNorm = l / 100;
  const c = (1 - Math.abs(2 * lNorm - 1)) * sNorm;
  const x = c * (1 - Math.abs(h / 60 % 2 - 1));
  const m = lNorm - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;
  if (h < 60) {
    r = c;
    g = x;
  } else if (h < 120) {
    r = x;
    g = c;
  } else if (h < 180) {
    g = c;
    b = x;
  } else if (h < 240) {
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    b = c;
  } else {
    r = c;
    b = x;
  }
  const toHex = (v) => Math.round((v + m) * 255).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
function randomizeTheme(seed) {
  const rng = createRng(seed ?? Date.now() ^ Math.random() * 4294967295);
  const count = 3 + Math.floor(rng() * 3);
  const bg = BACKGROUNDS[Math.floor(rng() * BACKGROUNDS.length)] ?? "#0a0a0a";
  return {
    background: bg,
    saturation: 50 + Math.floor(rng() * 40),
    grain: 20 + Math.floor(rng() * 30),
    breathing: 15 + Math.floor(rng() * 35),
    locked: false,
    orbs: Array.from({ length: count }, (_, i) => ({
      id: `orb-${i}`,
      color: randomHex(rng),
      position: [rng() * 0.8 + 0.1, rng() * 0.8 + 0.1],
      size: 0.5 + rng() * 0.5,
      blur: 30 + rng() * 40,
      opacity: 0.8,
      blendMode: "screen",
      drift: true,
      wavy: false,
      interactive: false
    })),
    selectedOrbId: null,
    renderer: "css"
  };
}

// editor/src/components/preset-gallery.tsx
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
function PresetGallery({ dispatch }) {
  const presetEntries = Object.entries(presets);
  const applyPreset = (preset) => {
    dispatch({
      type: "APPLY_PRESET",
      config: {
        background: preset.backgroundColor,
        saturation: preset.saturation,
        grain: preset.grain,
        breathing: preset.breathing,
        orbs: preset.points.map(
          (pt, i) => ({
            id: `preset-${i}`,
            color: pt.color,
            position: pt.position,
            size: pt.radius,
            blur: pt.blur ?? 40,
            opacity: pt.opacity ?? 0.8,
            blendMode: pt.blendMode ?? "screen",
            drift: pt.drift ?? true,
            wavy: pt.wavy ?? false,
            interactive: pt.interactive ?? false
          })
        )
      }
    });
  };
  const handleRandomize = () => {
    dispatch({ type: "RANDOMIZE", config: randomizeTheme() });
  };
  return /* @__PURE__ */ jsxs7("div", { className: "orbkit-editor-presets", children: [
    /* @__PURE__ */ jsxs7("div", { className: "orbkit-editor-presets-header", children: [
      /* @__PURE__ */ jsx7("h3", { className: "orbkit-editor-section-title", children: "Presets" }),
      /* @__PURE__ */ jsx7(
        "button",
        {
          type: "button",
          className: "orbkit-editor-btn orbkit-editor-btn--randomize",
          onClick: handleRandomize,
          children: "Randomize"
        }
      )
    ] }),
    /* @__PURE__ */ jsx7("div", { className: "orbkit-editor-preset-grid", children: presetEntries.map(([name, preset]) => /* @__PURE__ */ jsxs7(
      "button",
      {
        type: "button",
        className: "orbkit-editor-preset-thumb",
        onClick: () => applyPreset(preset),
        title: name,
        style: { background: preset.backgroundColor },
        children: [
          preset.points.map((pt) => /* @__PURE__ */ jsx7(
            "span",
            {
              className: "orbkit-editor-preset-dot",
              style: {
                backgroundColor: pt.color,
                left: `${pt.position[0] * 100}%`,
                top: `${pt.position[1] * 100}%`,
                width: `${pt.radius * 40}%`,
                height: `${pt.radius * 40}%`
              }
            },
            `${name}-${pt.id}`
          )),
          /* @__PURE__ */ jsx7("span", { className: "orbkit-editor-preset-name", children: name })
        ]
      },
      name
    )) })
  ] });
}

// editor/src/components/scene-controls.tsx
import { jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
var RENDERERS = ["css", "canvas", "webgl"];
function SceneControls({ state, dispatch }) {
  return /* @__PURE__ */ jsxs8("div", { className: "orbkit-editor-scene-controls", children: [
    /* @__PURE__ */ jsx8("h3", { className: "orbkit-editor-section-title", children: "Scene" }),
    /* @__PURE__ */ jsx8(
      ColorPicker,
      {
        label: "Background",
        value: state.background,
        onChange: (color) => dispatch({ type: "SET_BACKGROUND", color })
      }
    ),
    /* @__PURE__ */ jsx8(
      Slider,
      {
        label: "Saturation",
        value: state.saturation,
        min: 0,
        max: 100,
        onChange: (value) => dispatch({ type: "SET_SATURATION", value })
      }
    ),
    /* @__PURE__ */ jsx8(
      Slider,
      {
        label: "Grain",
        value: state.grain,
        min: 0,
        max: 100,
        onChange: (value) => dispatch({ type: "SET_GRAIN", value })
      }
    ),
    /* @__PURE__ */ jsx8(
      Slider,
      {
        label: "Breathing",
        value: state.breathing,
        min: 0,
        max: 100,
        onChange: (value) => dispatch({ type: "SET_BREATHING", value })
      }
    ),
    /* @__PURE__ */ jsxs8("div", { className: "orbkit-editor-field", children: [
      /* @__PURE__ */ jsx8("span", { className: "orbkit-editor-label", children: "Renderer" }),
      /* @__PURE__ */ jsx8("div", { className: "orbkit-editor-renderer-toggle", children: RENDERERS.map((r) => /* @__PURE__ */ jsx8(
        "button",
        {
          type: "button",
          className: `orbkit-editor-renderer-btn${state.renderer === r ? " orbkit-editor-renderer-btn--active" : ""}`,
          onClick: () => dispatch({ type: "SET_RENDERER", renderer: r }),
          children: r.toUpperCase()
        },
        r
      )) })
    ] }),
    /* @__PURE__ */ jsxs8("label", { className: "orbkit-editor-toggle", children: [
      /* @__PURE__ */ jsx8(
        "input",
        {
          type: "checkbox",
          checked: state.locked,
          onChange: (e) => dispatch({ type: "SET_LOCKED", locked: e.target.checked })
        }
      ),
      /* @__PURE__ */ jsx8("span", { children: "Symmetrical Lock" })
    ] })
  ] });
}

// editor/src/components/orb-editor.tsx
import { jsx as jsx9, jsxs as jsxs9 } from "react/jsx-runtime";
function OrbEditor({
  value,
  onChange,
  defaultValue,
  className
}) {
  const [state, dispatch] = useEditorState(value, defaultValue, onChange);
  const selectedOrb = useMemo(
    () => state.selectedOrbId ? state.orbs.find((o) => o.id === state.selectedOrbId) : void 0,
    [state.selectedOrbId, state.orbs]
  );
  return /* @__PURE__ */ jsxs9("div", { className: className ? `orbkit-editor ${className}` : "orbkit-editor", children: [
    /* @__PURE__ */ jsx9("div", { className: "orbkit-editor-main", children: /* @__PURE__ */ jsx9(CanvasPreview, { state, dispatch }) }),
    /* @__PURE__ */ jsxs9("div", { className: "orbkit-editor-sidebar", children: [
      /* @__PURE__ */ jsx9(PresetGallery, { dispatch }),
      /* @__PURE__ */ jsx9(OrbList, { orbs: state.orbs, selectedOrbId: state.selectedOrbId, dispatch }),
      selectedOrb && /* @__PURE__ */ jsx9(OrbControls, { orb: selectedOrb, dispatch }),
      /* @__PURE__ */ jsx9(SceneControls, { state, dispatch }),
      /* @__PURE__ */ jsx9(ExportPanel, { state })
    ] })
  ] });
}
export {
  CanvasPreview,
  ColorPicker,
  DEFAULT_STATE,
  ExportPanel,
  OrbControls,
  OrbEditor,
  OrbList,
  PresetGallery,
  SceneControls,
  Slider,
  editorReducer,
  exportCSS,
  exportJSON,
  exportJSX,
  randomizeTheme,
  useEditorState
};
