# makethen

[![npm](https://img.shields.io/npm/v/makethen.svg?style=flat-square)](https://www.npmjs.com/package/makethen) [![travis](https://img.shields.io/travis/deepsweet/makethen/master.svg?style=flat-square)](https://travis-ci.org/deepsweet/makethen)
[![coverage](https://img.shields.io/codecov/c/github/deepsweet/makethen.svg?style=flat-square)](https://codecov.io/github/deepsweet/makethen)
[![deps](https://img.shields.io/gemnasium/deepsweet/makethen.svg?style=flat-square)](https://gemnasium.com/deepsweet/makethen)

Promisify Node.js-style callbacks with native Promise.

## Requirements

* Node.js >= 8
* [`esm` loader](https://github.com/standard-things/esm)

## Install

```sh
$ yarn add makethen
```

## Usage

```js
import { readFile } from 'fs'
import makethen from 'makethen'

makethen(readFile)('foo.txt', 'utf8')
  .then((data) => {
    // …
  })
  .catch((error) => {
    // …
  })
```

```js
import request from 'request'
import makethen from 'makethen'

makethen(request)('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  .then(([ response, body ]) => {
    // …
  })
  .catch((error) => {
    // …
  })
```
