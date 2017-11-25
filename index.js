/* eslint-env node */
'use strict'

const MergeTrees = require('broccoli-merge-trees')
const EQMapping  = require('./lib/broccoli-eq-mapping')



module.exports = {
  name : 'ember-element-query',



  postprocessTree : function (type, tree) {
    if (type === 'all') {
      const mapping = new EQMapping (tree, this._getOptions())
      tree = new MergeTrees([tree, mapping])
    }

    return tree
  },



  _getOptions () {
    const app = this._findHost(this)
    return app && app.options && app.options.emberElementQuery || {}
  },



  // https://github.com/ember-engines/ember-asset-loader/blob/master/lib/utils/find-host.js
  _findHost (context) {
    let current = context
    let app

    // Keep iterating upward until we don't have a grandparent.
    // Has to do this grandparent check because at some point we hit the project.
    do {
      app = current.app || app
    } while (current.parent && current.parent.parent && (current = current.parent))

    return app
  }
}
