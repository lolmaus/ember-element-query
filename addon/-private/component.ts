import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { ComponentArgs, EQInfo } from 'ember-element-query';

export default class ElementQuery extends Component<ComponentArgs> {
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
