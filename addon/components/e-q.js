import Component from '@ember/component'
import layout from '../templates/components/e-q'
import ElementQueryMixin from '../mixins/element-query'
import DynamicAttributesMixin from '../mixins/dynamic-attributes'



export default Component.extend(ElementQueryMixin, DynamicAttributesMixin, {
  layout
})
