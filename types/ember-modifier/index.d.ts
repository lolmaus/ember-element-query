declare module 'ember-modifier' {
  export default class ClassBasedModifier<Args extends ModifierArgs = ModifierArgs> {
    readonly args: Args;
    constructor(owner: unknown, args: Args);
    element: HTMLElement | null;
    didReceiveArguments(): void;
    didUpdateArguments(): void;
    didInstall(): void;
    willRemove(): void;
    willDestroy(): void;
    isDestroying: boolean;
    isDestroyed: boolean;
  }

  // https://github.com/ember-modifier/ember-modifier/blob/8e3bcd2c1e6cfd3669376c6e552fdff9b99a9670/addon/-private/interfaces.ts
  export interface ModifierArgs<N = unknown> {
    /** Positional arguments to a modifier, `{{foo @bar this.baz}}` */
    positional: unknown[];
    /** Named arguments to a modifier, `{{foo bar=this.baz}}` */
    named: Record<string, N>;
  }
}
