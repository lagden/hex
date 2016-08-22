# Hex
[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]
[![devDependency Status][devDep-img]][devDep]

[ci-img]:        https://travis-ci.org/lagden/hex.svg
[ci]:            https://travis-ci.org/lagden/hex
[coveralls-img]: https://coveralls.io/repos/github/lagden/hex/badge.svg?branch=master
[coveralls]:     https://coveralls.io/github/lagden/hex?branch=master
[devDep-img]:    https://david-dm.org/lagden/hex/dev-status.svg
[devDep]:        https://david-dm.org/lagden/hex#info=devDependencies


Encode and decode


## Install

```
$ npm i -S lagden-hex
```


## Usage

```javascript
const hex = require('lagden-hex');
const e = hex.encode('Tadashi'); // \u0054\u0061\u0064\u0061\u0073\u0068\u0069
const d = hex.decode(e); // Tadashi
```


## License

MIT © [Thiago Lagden](http://lagden.in)
