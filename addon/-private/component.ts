import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { Args, EQInfo } from 'ember-element-query';

/** @internal */
export default class ElementQuery extends Component<Args> {
  @tracked
  eqInfo?: EQInfo;

  @action
  onResize(eqInfo: EQInfo): void {
    this.eqInfo = eqInfo;

    if (this.args.onResize) {
      this.args.onResize(eqInfo);
    }
  }
}
