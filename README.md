[![NPM][npm]][npm-url]
[![Node][node]][node-url]
[![Dependencies][deps]][deps-url]
[![DevDependencies][devdeps]][devdeps-url]
[![Standard Code Style][style]][style-url]

# PostHTML Use

## Install

```bash
$ npm i -D posthtml-use
```

## Status

| Branch               | Build                     | Coverage                 |
|:--------------------:|:-------------------------:|:------------------------:|
|  Master              | ![travis]                 | ![cover]                 |
|  Develop             | ![travis-dev]             | ![cover-dev]             |
|  Release/v1.0.0      | ![travis-rel]             | ![cover-rel]             |

## Usage

Add all plugins with @-rule syntax at the top of the file. Options can be set
within the use plugin or loaded from package.json.

```js

@use posthtml-bem

```
## Options

Options can be set within the use plugin or loaded from package.json.

```js

posthtml([ use({bem: }) ])

```

```js

posthtml([ use('./package.json') ])

```

```js

posthtml([ use('./path/to/[file].(js|json)') ])

```

**package.json**

```json
{
  "posthtml": {
    "bem": {
      "elemPrefix": "__",
      "modPrefix": "--",
      "modDlmtr": "-"
    }
  }
}

```

**file.(js | json)**

```js

module.exports = {
  bem: {
    elemPrefix: '__',
    modPrefix: '--',
    modDlmtr: '-'
  }
}

```

```json
{
  "bem": {
    "elemPrefix": "__",
    "modPrefix": "--",
    "modDlmtr": "-"
  }
}

```

## Example

```html

@use posthtml-bem

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>PostHTML Use</title>
  </head>
  <body>
    <div block="use">
      <section elem="bem"></section>
      <section elem="bem" mod="awesome"></section>
    </div>
  </body>
</html>

```

```html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>PostHTML Use</title>
  </head>
  <body>
    <div class="use">
      <section class="use__bem"></section>
      <section class="use__bem use__bem--awesome"></section>
    </div>
  </body>
</html>

```


## LICENSE [![License MIT][license]][license-url]

> MIT License (MIT)

>Copyright (c) 2016 Michael Ciniawsky

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[npm]: https://img.shields.io/npm/v/posthtml-use.svg
[npm-url]: https://npmjs.com/package/posthml-use

[node]: https://img.shields.io/node/v/gh-badges.svg?maxAge=2592000
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/michael-ciniawsky/posthtml-use.svg
[deps-url]: https://david-dm.org/michael-ciniawsky/posthtml-use

[devdeps]: https://david-dm.org/michael-ciniawsky/posthtml-use/dev-status.svg
[devdeps-url]: https://david-dm.org/michael-ciniawsky/posthtml-use#info=devDependencies

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[travis]: http://img.shields.io/travis/michael-ciniawsky/posthtml-use.svg
[travis-url]: https://travis-ci.org/michael-ciniawsky/posthtml-use

[travis-rel]: http://img.shields.io/travis/michael-ciniawsky/posthtml-use.svg?branch=release/1.0.0
[travis-rel-url]:https://travis-ci.org/michael-ciniawsky/posthtml-use?branch=release/1.0.0

[travis-dev]: http://img.shields.io/travis/michael-ciniawsky/posthtml-use.svg?branch=develop
[travis-dev-url]: https://travis-ci.org/michael-ciniawsky/posthtml-use?branch=develop

[cover]: https://coveralls.io/repos/github/michael-ciniawsky/posthtml-use/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/michael-ciniawsky/posthtml-use?branch=master

[cover-rel]: https://coveralls.io/repos/github/michael-ciniawsky/posthtml-use/badge.svg?branch=release<ver>
[cover-rel-url]: https://coveralls.io/github/michael-ciniawsky/posthtml-use?branch=release<ver>

[cover-dev]: https://coveralls.io/repos/github/michael-ciniawskyposthtml-use/badge.svg?branch=develop
[cover-dev-url]: https://coveralls.io/github/michael-ciniawsky/posthtml-use?branch=develop

[license]: https://img.shields.io/github/license/michael-ciniawsky/posthtml-use.svg
[license-url]: https://raw.githubusercontent.com/michael-ciniawsky/posthtml-use/master/LICENSE
