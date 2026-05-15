"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// editor/src/index.ts
var index_exports = {};
__export(index_exports, {
  CanvasPreview: () => CanvasPreview,
  ColorPicker: () => ColorPicker,
  DEFAULT_STATE: () => DEFAULT_STATE,
  ExportPanel: () => ExportPanel,
  OrbControls: () => OrbControls,
  OrbEditor: () => OrbEditor,
  OrbList: () => OrbList,
  PresetGallery: () => PresetGallery,
  SceneControls: () => SceneControls,
  Slider: () => Slider,
  editorReducer: () => editorReducer,
  exportCSS: () => exportCSS,
  exportJSON: () => exportJSON,
  exportJSX: () => exportJSX,
  randomizeTheme: () => randomizeTheme,
  useEditorState: () => useEditorState
});
module.exports = __toCommonJS(index_exports);

// editor/src/components/orb-editor.tsx
var import_react5 = require("react");

// editor/src/hooks/use-editor-state.ts
var import_react = require("react");

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
  const [state, dispatch] = (0, import_react.useReducer)(editorReducer, value ?? defaultValue ?? DEFAULT_STATE);
  const isControlled = value !== void 0;
  const wasControlledRef = (0, import_react.useRef)(isControlled);
  (0, import_react.useEffect)(() => {
    if (wasControlledRef.current !== isControlled) {
      console.warn(
        "OrbEditor: Switching between controlled and uncontrolled mode is not supported."
      );
    }
    wasControlledRef.current = isControlled;
  }, [isControlled]);
  (0, import_react.useEffect)(() => {
    if (isControlled && value) {
      dispatch({ type: "LOAD_CONFIG", config: value });
    }
  }, [value, isControlled]);
  const stableDispatch = (0, import_react.useCallback)(
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
var import_orbkit = require("@dreamteamapp/orbkit");
var import_react3 = require("react");

// editor/src/hooks/use-drag.ts
var import_react2 = require("react");
function useDrag({ onDrag, containerRef }) {
  const draggingRef = (0, import_react2.useRef)(false);
  const getPosition = (0, import_react2.useCallback)(
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
  const onPointerDown = (0, import_react2.useCallback)(
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
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  const containerRef = (0, import_react3.useRef)(null);
  const addOrbAt = (0, import_react3.useCallback)(
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
  const handleClick = (0, import_react3.useCallback)(
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
  const handleKeyDown = (0, import_react3.useCallback)(
    (e) => {
      if (e.target !== e.currentTarget) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        addOrbAt(0.5, 0.5);
      }
    },
    [addOrbAt]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_orbkit.OrbScene,
          {
            background: state.background,
            grain: state.grain / 100,
            saturation: state.saturation,
            breathing: state.breathing,
            renderer: state.renderer,
            children: state.orbs.map((orb) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_orbkit.Orb,
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
        state.orbs.map((orb) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_react4 = require("react");

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
var import_jsx_runtime2 = require("react/jsx-runtime");
function ExportPanel({ state }) {
  const [copiedFormat, setCopiedFormat] = (0, import_react4.useState)(null);
  const timerRef = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  const getExport = (0, import_react4.useCallback)(
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
  const handleCopy = (0, import_react4.useCallback)(
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
  const handleDownload = (0, import_react4.useCallback)(() => {
    const json = exportJSON(state);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "orbkit-scene.json";
    a.click();
    URL.revokeObjectURL(url);
  }, [state]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "orbkit-editor-export", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: "orbkit-editor-section-title", children: "Export" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "orbkit-editor-export-buttons", children: [
      ["jsx", "json", "css"].map((format) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "button",
        {
          type: "button",
          className: "orbkit-editor-btn orbkit-editor-btn--export",
          onClick: () => handleCopy(format),
          children: copiedFormat === format ? "Copied!" : `Copy ${format.toUpperCase()}`
        },
        format
      )),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var import_jsx_runtime3 = require("react/jsx-runtime");
var HEX_PATTERN = /^#[0-9a-fA-F]{0,6}$/;
function ColorPicker({ value, onChange, label }) {
  const colorInput = /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "input",
    {
      type: "color",
      value,
      onChange: (e) => onChange(e.target.value),
      className: "orbkit-editor-color-swatch"
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "orbkit-editor-color-picker", children: [
    label ? (
      // biome-ignore lint/a11y/noLabelWithoutControl: color input is rendered as child via JSX variable
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { className: "orbkit-editor-label", children: [
        label,
        colorInput
      ] })
    ) : colorInput,
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var import_jsx_runtime4 = require("react/jsx-runtime");
function Slider({ label, value, min, max, step = 1, onChange }) {
  const percent = max !== min ? (value - min) / (max - min) * 100 : 0;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("label", { className: "orbkit-editor-slider", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "orbkit-editor-slider-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "orbkit-editor-label", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "orbkit-editor-slider-value", children: value })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "orbkit-editor-orb-controls", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "orbkit-editor-section-title", children: "Orb Settings" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ColorPicker, { label: "Color", value: orb.color, onChange: (color) => update({ color }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      Slider,
      {
        label: "Size",
        value: Math.round(orb.size * 100),
        min: 10,
        max: 100,
        onChange: (v) => update({ size: v / 100 })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      Slider,
      {
        label: "Blur",
        value: orb.blur,
        min: 0,
        max: 100,
        onChange: (blur) => update({ blur })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      Slider,
      {
        label: "Opacity",
        value: Math.round(orb.opacity * 100),
        min: 10,
        max: 100,
        onChange: (v) => update({ opacity: v / 100 })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { className: "orbkit-editor-field", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "orbkit-editor-label", children: "Blend Mode" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "select",
        {
          value: orb.blendMode,
          onChange: (e) => update({ blendMode: e.target.value }),
          className: "orbkit-editor-select",
          children: BLEND_MODES.map((mode) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: mode, children: mode }, mode))
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "orbkit-editor-toggle-group", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { className: "orbkit-editor-toggle", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "input",
          {
            type: "checkbox",
            checked: orb.drift,
            onChange: (e) => update({ drift: e.target.checked })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: "Drift" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { className: "orbkit-editor-toggle", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "input",
          {
            type: "checkbox",
            checked: orb.wavy,
            onChange: (e) => update({ wavy: e.target.checked })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: "Wavy" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { className: "orbkit-editor-toggle", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "input",
          {
            type: "checkbox",
            checked: orb.interactive,
            onChange: (e) => update({ interactive: e.target.checked })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: "Interactive" })
      ] })
    ] })
  ] });
}

// editor/src/components/orb-list.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "orbkit-editor-orb-list", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "orbkit-editor-orb-list-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { className: "orbkit-editor-section-title", children: "Orbs" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { type: "button", className: "orbkit-editor-btn orbkit-editor-btn--add", onClick: addOrb, children: "+ Add" })
    ] }),
    orbs.map((orb) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "div",
      {
        className: `orbkit-editor-orb-item${orb.id === selectedOrbId ? " orbkit-editor-orb-item--selected" : ""}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
            "button",
            {
              type: "button",
              className: "orbkit-editor-orb-item-select",
              onClick: () => dispatch({ type: "SELECT_ORB", id: orb.id }),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "orbkit-editor-orb-swatch", style: { backgroundColor: orb.color } }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "orbkit-editor-orb-name", children: orb.color })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
    orbs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "orbkit-editor-hint", children: 'No orbs yet. Click "+ Add" to create one.' })
  ] });
}

// editor/src/components/preset-gallery.tsx
var import_orbkit2 = require("@dreamteamapp/orbkit");

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
var import_jsx_runtime7 = require("react/jsx-runtime");
function PresetGallery({ dispatch }) {
  const presetEntries = Object.entries(import_orbkit2.presets);
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "orbkit-editor-presets", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "orbkit-editor-presets-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "orbkit-editor-section-title", children: "Presets" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "button",
        {
          type: "button",
          className: "orbkit-editor-btn orbkit-editor-btn--randomize",
          onClick: handleRandomize,
          children: "Randomize"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "orbkit-editor-preset-grid", children: presetEntries.map(([name, preset]) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "button",
      {
        type: "button",
        className: "orbkit-editor-preset-thumb",
        onClick: () => applyPreset(preset),
        title: name,
        style: { background: preset.backgroundColor },
        children: [
          preset.points.map((pt) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "orbkit-editor-preset-name", children: name })
        ]
      },
      name
    )) })
  ] });
}

// editor/src/components/scene-controls.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var RENDERERS = ["css", "canvas", "webgl"];
function SceneControls({ state, dispatch }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "orbkit-editor-scene-controls", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "orbkit-editor-section-title", children: "Scene" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      ColorPicker,
      {
        label: "Background",
        value: state.background,
        onChange: (color) => dispatch({ type: "SET_BACKGROUND", color })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      Slider,
      {
        label: "Saturation",
        value: state.saturation,
        min: 0,
        max: 100,
        onChange: (value) => dispatch({ type: "SET_SATURATION", value })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      Slider,
      {
        label: "Grain",
        value: state.grain,
        min: 0,
        max: 100,
        onChange: (value) => dispatch({ type: "SET_GRAIN", value })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      Slider,
      {
        label: "Breathing",
        value: state.breathing,
        min: 0,
        max: 100,
        onChange: (value) => dispatch({ type: "SET_BREATHING", value })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "orbkit-editor-field", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "orbkit-editor-label", children: "Renderer" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "orbkit-editor-renderer-toggle", children: RENDERERS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("label", { className: "orbkit-editor-toggle", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "input",
        {
          type: "checkbox",
          checked: state.locked,
          onChange: (e) => dispatch({ type: "SET_LOCKED", locked: e.target.checked })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: "Symmetrical Lock" })
    ] })
  ] });
}

// editor/src/components/orb-editor.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function OrbEditor({
  value,
  onChange,
  defaultValue,
  className
}) {
  const [state, dispatch] = useEditorState(value, defaultValue, onChange);
  const selectedOrb = (0, import_react5.useMemo)(
    () => state.selectedOrbId ? state.orbs.find((o) => o.id === state.selectedOrbId) : void 0,
    [state.selectedOrbId, state.orbs]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: className ? `orbkit-editor ${className}` : "orbkit-editor", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "orbkit-editor-main", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CanvasPreview, { state, dispatch }) }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "orbkit-editor-sidebar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(PresetGallery, { dispatch }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(OrbList, { orbs: state.orbs, selectedOrbId: state.selectedOrbId, dispatch }),
      selectedOrb && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(OrbControls, { orb: selectedOrb, dispatch }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SceneControls, { state, dispatch }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ExportPanel, { state })
    ] })
  ] });
}
