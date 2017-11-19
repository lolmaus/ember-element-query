import showdown from 'showdown'
import hljs from 'npm:highlight.js'

export function initialize () {
  showdown.setFlavor('github')
  showdown.setOption('ghCodeBlocks',   true)
  showdown.setOption('tablesHeaderId', true)
  showdown.setOption('tables',         true)
  showdown.setOption('strikethrough',  true)

  showdown.extension('hljs', function () {
    function htmlunencode (text) {
      return (
        text
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
      )
    }

    function replacement (wholeMatch, match, left, right) {
      const regex = /class="(.+?)"/

      // unescape match to prevent double escaping
      match = htmlunencode(match)
      const newLeft =
        regex.test(left)
          ? left.replace(regex, 'class="$1 hljs"')
          : left.replace(/>$/,  ' class="hljs">')

      return newLeft + hljs.highlightAuto(match).value + right
    }

    return {
      type   : 'output',
      filter : function (text, converter, options) {
        // use new showdown's regexp engine to conditionally parse code blocks
        const left  = '<pre.*?><code.*?>'
        const right = '</code></pre>'
        const flags = 'g'
        return showdown.helper.replaceRecursiveRegExp(text, replacement, left, right, flags)
      }
    }
  })

}

export default {
  name : 'showdown',
  initialize
}
