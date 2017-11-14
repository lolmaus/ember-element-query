import Component from '@ember/component'
import { computed } from '@ember/object'
import layout from '../templates/components/x-ember-forwarding'
import ElementQueryMixin from 'ember-element-query/element-query-mixin'



export default Component.extend(ElementQueryMixin, {
  layout,

  classNames : ['demo-component'],

  name : null,

  effectiveName : computed('name', 'eqParent.effectiveName', function () {
    const name       = this.get('name')
    const parentName = this.get('eqParent.effectiveName')

    return parentName
      ? `${parentName}-${name}`
      : name
  }),

  eqHandleResize () {
    console.log('Handle resize!', this.get('effectiveName'))


    this._super(...arguments)
  },

  didInsertParent () {
    this._super(...arguments)

    console.log('didInsertParent', this.get('effectiveName'))
  },

  willDestroyParent () {
    this._super(...arguments)

    console.log('willDestroyParent', this.get('effectiveName'))
  },

})
