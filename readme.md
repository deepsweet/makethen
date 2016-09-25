# makethen

[![npm](https://img.shields.io/npm/v/makethen.svg?style=flat-square)](https://www.npmjs.com/package/makethen)
[![travis](https://img.shields.io/travis/deeosweet/makethen/master.svg?style=flat-square)](https://travis-ci.org/deepsweet/makethen)
[![coverage](https://img.shields.io/codecov/c/github/deepsweet/makethen.svg?style=flat-square)](https://codecov.io/github/deepsweet/makethen)
[![deps](https://img.shields.io/gemnasium/deepsweet/makethen.svg?style=flat-square)](https://gemnasium.com/deepsweet/makethen)

Promisify Node.js-style callbacks with native Promise.

* no "promisify all methods", no context
* no deps, just native Promise with Node.js >= 0.12
* array of multiple result arguments if needed

## Install

```
npm i -S makethen
```

## Usage

### Basic

```js
import fs from 'fs';
import makethen from 'makethen';

makethen(fs.readFile)('foo.txt', 'utf8').then((result) => {
    // ...
});
```

### Multiple result arguments

```js
import request from 'request';
import makethen from 'makethen';

makethen(request)('https://www.google.com').then((result) => {
    const [ response, body ] = result;

    // ...
});
```
