# Plasticine.js
[![Build Status](https://img.shields.io/travis/plasticinejs/plasticine.js/master.svg?style=flat-square)](https://travis-ci.org/plasticinejs/plasticine.js)
[![Dependency Status](https://img.shields.io/david/plasticinejs/plasticine.js.svg?style=flat-square)](https://david-dm.org/plasticinejs/plasticine.js)
[![devDependency Status](https://img.shields.io/david/dev/plasticinejs/plasticine.js.svg?style=flat-square)](https://david-dm.org/plasticinejs/plasticine.js#info=devDependencies)
[![Latest Stable Version](https://img.shields.io/npm/v/plasticine.js.svg?style=flat-square)](https://www.npmjs.com/package/plasticine.js)
[![NPM Downloads](https://img.shields.io/npm/dm/plasticine.js.svg?style=flat-square)](https://www.npmjs.com/package/plasticine.js)

## Installation
```bash
$ npm install plasticine.js
```
or
```bash
$ npm i plasticine.js
```

Syntax:
| Operator                  | Description                                                        |
| :------------------------ | :----------------------------------------------------------------- |
| `$`                       | Root                                                               |
| `*`                       | Wildcard. Available anywhere a name or numeric are required.       |
| `..`                      | Deep wildcard. Available anywhere a name is required.              |
| `.<name>`                 | Dot-notated child                                                  |
| `['<name> (, <name>)']`   | Selecting multiple children                                        |
| `[<number> (, <number>)]` | Indexed child or children                                          |
| `[?(<expression>)]`       | Filter expression. Expression must evaluate to a boolean value.    |
| `[(<expression>)]`        | Expression. Expression must evaluate to a string or numeric value. |

## Docs & Community

  * [Website and Documentation](http://plasticinejs.github.io/plasticine.js/)
  * [Github Organization](https://github.com/plasticinejs)

## Tests
To run the test suite, first install the dependencies, then run `npm test`:
```bash
$ npm install
$ npm test
```

## License
[MIT](LICENSE)