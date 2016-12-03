# Hex
[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]
[![devDependency Status][devDep-img]][devDep]
[![XO code style][xo-img]][xo]

[ci-img]:        https://travis-ci.org/lagden/hex.svg
[ci]:            https://travis-ci.org/lagden/hex
[coveralls-img]: https://coveralls.io/repos/github/lagden/hex/badge.svg?branch=master
[coveralls]:     https://coveralls.io/github/lagden/hex?branch=master
[devDep-img]:    https://david-dm.org/lagden/hex/dev-status.svg
[devDep]:        https://david-dm.org/lagden/hex#info=devDependencies
[xo-img]:        https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo]:            https://github.com/sindresorhus/xo


Encode and decode


## Install

```
$ npm i -S lagden-hex
```


## Usage

```js
const hex = require('lagden-hex')

hex.encode('Tadashi') // \u0054\u0061\u0064\u0061\u0073\u0068\u0069
hex.decode('\u0054\u0061\u0064\u0061\u0073\u0068\u0069') // Tadashi

/* or */

hex.encode('Tadashi', false) // 54616461736869
hex.decode('54616461736869', false) // Tadashi
```

## License

MIT © [Thiago Lagden](http://lagden.in)
