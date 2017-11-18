import Component from '@ember/component';
import layout from '../templates/components/e-q';
import ElementQueryMixin from '../mixins/element-query'

export default Component.extend(ElementQueryMixin, {
  layout
});
