/* globals Event */

/**
 *
 * This is a placeholder for classless utils.
 *
 * @class EEQ.Utils
 * */

export const event = (typeof Event !== 'undefined') ? new Event('eq-update') : null;

/**
 *
 * Triggers an `eq-update` on `window`.
 *
 * @method trigger
 * @example
 * import eqTrigger from 'ember-element-query/trigger';
 *
 * on('foo', () => {
 *   trigger();
 * });
 * */
export default function trigger() {
  if (window && event) {
    return window.dispatchEvent(event);
  }
}
