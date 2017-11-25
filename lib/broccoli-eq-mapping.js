/* eslint-env node */

const CachingWriter = require('broccoli-caching-writer')
const fs            = require('fs-extra')
const path          = require('path')
const walkSync      = require('walk-sync')

// https://gist.github.com/KOBA789/da0c963d491700cc2422
const strRegexClass   = "\\.-?(?:[_a-z]|[\\240-\\377]|(?:(:?\\\\[0-9a-f]{1,6}(\\r\\n|[ \\t\\r\\n\\f])?)|\\\\[^\\r\\n\\f0-9a-f]))(?:[_a-z0-9-]|[\\240-\\377]|(?:(:?\\\\[0-9a-f]{1,6}(\\r\\n|[ \\t\\r\\n\\f])?)|\\\\[^\\r\\n\\f0-9a-f]))*"
const strRegexClasses = `(${strRegexClass})*`
const strRegexAttr    = "\\[data-eq-(from|to)~=['\"](\\d+)px['\"]\\]"
const strRegexOther   = "[^\\s+>~]*"

const regexSelectors  = new RegExp(strRegexClasses + strRegexOther + strRegexAttr + strRegexOther + strRegexClasses, 'gi')
const regexClassNames = new RegExp(strRegexClass, 'gi')
const regexAttrs      = new RegExp(strRegexAttr, 'gi')
const regexAttrDir    = /(from|to)/gi
const regexAttrNumber = /\d+/gi

const windowAttr  = '__ember-element-query-mapping__'
const mappingPath = 'assets/element-query-mapping.js'



module.exports = class ElementQueryMap extends CachingWriter {
  constructor (inputNode, options = {}) {
    super([inputNode], {
      inputFiles : ['**/*.css'],
    })

    this.options = {
      mappingPath,
      windowAttr,
      ...options
    }
  }



  build () {
    const mapping =
      this
        .inputPaths
        .reduce((result, dirName) => {
          const cssFiles = walkSync(dirName, {globs : ['**/*.css']})

          cssFiles.forEach(fileName => {
            const fullFileName = path.join(dirName, fileName)
            const css          = fs.readFileSync(fullFileName, {encoding : 'utf8'})
            const selectors    = css.match(regexSelectors)

            if (!selectors) return

            selectors.forEach(selector => {
              const classNames =
                (selector.match(regexClassNames) || [])
                  .map(className => className.slice(1)) // remove the leading dot

              if (!classNames.length) return

              const pxValues =
                (selector.match(regexAttrs) || [])
                  .map(dataAttr => {
                    const [direction] = dataAttr.match(regexAttrDir)
                    const [value]     = dataAttr.match(regexAttrNumber)
                    return [direction, parseInt(value, 10)]
                  })

              classNames.forEach(className => {
                const obj = result[className] || (result[className] = {})

                pxValues.forEach(([direction, value]) => {
                  const arr = obj[direction] || (obj[direction] = [])
                  if (!arr.includes(value)) arr.push(value)
                })
              })
            })
          })

          return result
        }, {})

    const fileName = path.join(this.outputPath, this.options.mappingPath)

    // https://github.com/ef4/ember-browserify/blob/v1.2.0/lib/stubs.js#L57
    const output = `
define('ember-element-query-mapping', [], function () {
  return {
    default: ${JSON.stringify(mapping, null, 2)}
  }
})
`

    fs.outputFileSync(fileName, output)
  }
}
