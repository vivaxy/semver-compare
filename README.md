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

hobbyquaker/semantic-compare x 69,697 ops/sec ±5.74% (83 runs sampled)

asamuzaK/semverParser x 136,009 ops/sec ±0.81% (90 runs sampled)

npm/node-semver x 136,487 ops/sec ±1.27% (88 runs sampled)

omichelsen/compare-versions x 140,054 ops/sec ±2.73% (76 runs sampled)

vivaxy/semver-compare x 197,073 ops/sec ±3.13% (85 runs sampled)

Fastest is vivaxy/semver-compare

# Related Projects

- [zenithpolar/semver-compare](https://github.com/zenithpolar/semver-compare)
- [substack/semver-compare](https://github.com/substack/semver-compare)
- [leohihimax/node-version-compare](https://github.com/leohihimax/node-version-compare)
- [hobbyquaker/semantic-compare](https://github.com/hobbyquaker/semantic-compare)
- [asamuzaK/semverParser](https://github.com/asamuzaK/semverParser)
- [npm/node-semver](https://github.com/npm/node-semver)
- [omichelsen/compare-versions](https://github.com/omichelsen/compare-versions)

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
