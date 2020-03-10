# @vivaxy/semver-compare

[![Build Status][travis-image]][travis-url]
[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]
[![Standard Version][standard-version-image]][standard-version-url]
[![Codecov][codecov-image]][codecov-url]

# Install

`yarn add @vivaxy/semver-compare` or `npm i @vivaxy/semver-compare`

# Usage

```js
import semverCompare from '@vivaxy/semver-compare';

console.log(semverCompare('1.0.0', '1.0.1')); // => -1
```

# Benchmark

npm/node-semver x 133,508 ops/sec ±1.24% (87 runs sampled)

hobbyquaker/semantic-compare x 79,770 ops/sec ±1.05% (92 runs sampled)

omichelsen/compare-versions x 152,831 ops/sec ±1.44% (86 runs sampled)

asamuzaK/semverParser x 130,150 ops/sec ±2.42% (87 runs sampled)

vivaxy/semver-compare x 211,755 ops/sec ±1.13% (87 runs sampled)

Fastest is vivaxy/semver-compare

# Related Projects

- [npm/node-semver](https://github.com/npm/node-semver)
- [zenithpolar/semver-compare](https://github.com/zenithpolar/semver-compare)
- [hobbyquaker/semantic-compare](https://github.com/hobbyquaker/semantic-compare)
- [omichelsen/compare-versions](https://github.com/omichelsen/compare-versions)
- [substack/semver-compare](https://github.com/substack/semver-compare)
- [leohihimax/node-version-compare](https://github.com/leohihimax/node-version-compare)
- [asamuzaK/semverParser](https://github.com/asamuzaK/semverParser)

#

_Project created by [create-n](https://github.com/vivaxy/create-n)._

[travis-image]: https://img.shields.io/travis/vivaxy/semver-compare.svg?style=flat-square
[travis-url]: https://travis-ci.org/vivaxy/semver-compare
[npm-version-image]: https://img.shields.io/npm/v/@vivaxy/semver-compare.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@vivaxy/semver-compare
[npm-downloads-image]: https://img.shields.io/npm/dt/@vivaxy/semver-compare.svg?style=flat-square
[license-image]: https://img.shields.io/npm/l/@vivaxy/semver-compare.svg?style=flat-square
[license-url]: LICENSE
[standard-version-image]: https://img.shields.io/badge/release-standard%20version-brightgreen.svg?style=flat-square
[standard-version-url]: https://github.com/conventional-changelog/standard-version
[codecov-image]: https://img.shields.io/codecov/c/github/vivaxy/semver-compare.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/vivaxy/semver-compare
