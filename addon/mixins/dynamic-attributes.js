import Mixin from '@ember/object/mixin'



// Based on https://github.com/DockYard/ember-one-way-controls/blob/v3.0.1/addon/-private/dynamic-attribute-bindings.js
export default Mixin.create({

  attributeBindings      : [],
  ignoredAttrs           : ['class', 'classNames', 'tagName'],
  concatenatedProperties : ['ignoredAttrs'],

  didReceiveAttrs () {
    this._super(...arguments)

    const attributeBindingsFromAttrs =
      Object
        .keys(this.attrs)
        .filter(key =>
          this.ignoredAttrs.indexOf(key) === -1
          && this.attributeBindings.indexOf(key) === -1
        )

    this.set('attributeBindings', this.attributeBindings.concat(attributeBindingsFromAttrs))
  }
})
