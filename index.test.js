// ------------------------------------
// #POSTHTML - USE - TEST
// ------------------------------------

'use strict'

const test = require('ava')

const plugin = require('./')

const { readFileSync } = require('fs')

const read = (path) => {
  readFileSync(path, 'utf8')
}

test('test if result matches expected output with defaults', (t) => {
  require('posthtml')([ plugin() ])
    .process(read('./test/fixtures/index.html'))
    .then((result) => {
      t.is(result.html, read('./test/expect/default.html'))
    })
})

test('result matches expected output with package.json', (t) => {
  require('posthtml')([ plugin('./package.json') ])
    .process(read('./test/fixtures/index.html'))
    .then((result) => {
      t.is(result.html, read('./test/expect/options.html'))
    })
})

test('result matches expected output with file.js', (t) => {
  require('posthtml')([ plugin('./test/plugins.js') ])
    .process(read('./test/fixtures/index.html'))
    .then((result) => {
      t.is(result.html, read('./test/expect/options.html'))
    })
})

test('result matches expected output with file.json', (t) => {
  require('posthtml')([ plugin('./test/plugins.json') ])
    .process(read('./test/fixtures/index.html'))
    .then((result) => {
      t.is(result.html, read('./test/expect/options.html'))
    })
})
