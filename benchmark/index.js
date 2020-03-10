/**
 * @since 2020-03-10 08:23
 * @author vivaxy
 */
const path = require('path');
const fse = require('fs-extra');
const Benchmark = require('benchmark');
const npmNodeSemver = require('semver/functions/compare');
const { cmp: zenithpolarSemverCompare } = require('semver-compare-multi');
const hobbyquakerSemanticCompare = require('semantic-compare');
const omichelsenCompareVersions = require('compare-versions');
const substackSemverCompare = require('semver-compare');
const leohihimaxNodeVersionCompare = require('node-version-compare');
const { compareSemVer: asamuzaKSemverParser } = require('semver-parser');
const { default: vivaxySemverCompare } = require('../lib');

function benchmark(functions) {
  return new Promise(function(resolve, reject) {
    let message = '';
    const suite = new Benchmark.Suite();
    Object.keys(functions).forEach(function(name) {
      suite.add(name, functions[name]);
    });
    suite.on('cycle', function(event) {
      message += String(event.target) + '\n\n';
    });
    suite.on('complete', async function() {
      message += 'Fastest is ' + this.filter('fastest').map('name');
      resolve(message);
    });
    suite.on('error', function(e) {
      reject(e.target.error);
    });
    suite.run();
  });
}

async function writeToReadme(content) {
  const readmePath = path.join(__dirname, '..', 'README.md');
  const splitString = '\n# ';
  const readme = await fse.readFile(readmePath, 'utf8');
  const readmes = readme.split(splitString).map((readmeSection) => {
    if (readmeSection.startsWith('Benchmark')) {
      return 'Benchmark\n\n' + content + '\n';
    }
    return readmeSection;
  });
  await fse.writeFile(readmePath, readmes.join(splitString));
}

(async function() {
  const testCases = [
    ['1.0.0', '1.0.1'],
    ['1.0.0', '1.1.0'],
    ['1.0.0', '2.0.0'],
    ['1.0.0', '1.0.0-beta.1'],
    ['1.0.0', '1.0.0+build.1'],
    ['1.0.0', '1.0.0-beta.1+build.1'],
  ];

  const results = {};

  function forEachTestCase(name, fn) {
    testCases.forEach(function([a, b], index) {
      const result = fn(a, b);
      results[name] = results[name] || [];
      results[name][index] = result;
    });
  }

  const functions = {
    // 'substack/semver-compare'() {
    //   forEachTestCase(this.name, function(a, b) {
    //     return substackSemverCompare(a, b);
    //   });
    // },
    // 'leohihimax/node-version-compare'() {
    //   forEachTestCase(this.name, function(a, b) {
    //     return leohihimaxNodeVersionCompare(a, b);
    //   });
    // },
    // 'zenithpolar/semver-compare'() {
    //   forEachTestCase(this.name, function(a, b) {
    //     return zenithpolarSemverCompare(a, b);
    //   });
    // },
    'npm/node-semver'() {
      forEachTestCase(this.name, function(a, b) {
        return npmNodeSemver(a, b);
      });
    },
    'hobbyquaker/semantic-compare'() {
      forEachTestCase(this.name, function(a, b) {
        return hobbyquakerSemanticCompare(a, b);
      });
    },
    'omichelsen/compare-versions'() {
      forEachTestCase(this.name, function(a, b) {
        return omichelsenCompareVersions(a, b);
      });
    },
    'asamuzaK/semverParser'() {
      forEachTestCase(this.name, function(a, b) {
        return asamuzaKSemverParser(a, b);
      });
    },
    'vivaxy/semver-compare'() {
      forEachTestCase(this.name, function(a, b) {
        return vivaxySemverCompare(a, b);
      });
    },
  };

  try {
    console.log('Benchmark start...');
    const result = await benchmark(functions);

    await writeToReadme(result);
    console.log(result);
    console.table(results);
  } catch (e) {
    console.error(e);
  }
})();
