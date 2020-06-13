declare module 'ember-resize-observer-modifier/modifiers/observe-resize' {
  // prettier-ignore
  export function observeResize(
    element: HTMLElement,
    [changeHandler]: [() => void]
  ):
    () => void;
}
