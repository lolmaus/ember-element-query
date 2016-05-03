/* globals Event */

/**
 *
 * This is a placeholder for classless utils.
 *
 * @class EQUtils
 * */

export const event = new Event('eq-update');

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
  return window.dispatchEvent(event);
}
