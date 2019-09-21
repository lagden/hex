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
[registry]:      https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry


Encode and decode


## Install

[Configure npm for use with GitHub Package Registry][registry] before install

```
$ npm i -S @lagden/hex
```


## Usage

```js
const {encode, decode} = require('@lagden/hex')

encode('Tadashi') // \u0054\u0061\u0064\u0061\u0073\u0068\u0069
decode('\u0054\u0061\u0064\u0061\u0073\u0068\u0069') // Tadashi

/* or */

encode('😃', false) // d83dde03
decode('d83dde03', false) // 😃
```

## License

MIT © [Thiago Lagden](https://github.com/lagden)
