// ------------------------------------
// #POSTHTML - USE
// ------------------------------------

'use strict'

const posthtml = require('posthtml')

const render = require('posthtml-render')

exports = module.exports = function (options) {
  options = options || {}

  if (typeof options === 'string' && !options.includes('package.json')) {
    options = require(options)
  }

  if (typeof options === 'string' && options.includes('package.json')) {
    options = require(options).posthtml
  }

  return function PostHTMLUse (tree) {
    let plugins

    tree.forEach((use) => {
      if (typeof use === 'string' && use.includes('@use')) {
        plugins = use.split('\n')
      }
    })

    tree.shift()

    let settings

    plugins = plugins
      .filter((plugin) => plugin !== '' ? plugin : '')
      .map((plugin) => {
        if (options[plugin.replace('@use ', '').split('-')[1]]) {
          settings = options[plugin.replace('@use ', '').split('-')[1]]

          return require(plugin.replace('@use ', '').split('(')[0])(settings)
        }

        return require(plugin.replace('@use ', ''))()
      })

    tree = posthtml(plugins)
     .process(render(tree), {sync: true})
     .tree

    return tree
  }
}
