/* eslint-env node */
'use strict'

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon')
const Funnel = require('broccoli-funnel')
const UnwatchedDir = require('broccoli-source').UnwatchedDir

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
    sassOptions : {
      includePaths : [
        'addon',
        'tests',
      ]
    },

    nodeModulesToVendor : [
      /* UnwatchedDir is optional, but it is rare to need a watcher assigned to a node_modules dependencies */
      new Funnel(new UnwatchedDir('node_modules/highlight.js/styles'), {
        destDir : 'highlight.js-styles',
        files   : ['agate.css']
      })
    ],
  })

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
  app.import('vendor/highlight.js-styles/agate.css')

  return app.toTree()
}
