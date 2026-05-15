// @ts-ignore — esbuild text loader returns the CSS file as a string.
import css from './styles.css';

const STYLE_ID = 'orbkit-editor-styles';

export function injectEditorStyles(): void {
  if (typeof document === 'undefined') return;
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = css as unknown as string;
  document.head.appendChild(style);
}

injectEditorStyles();
