# Plasticine.js
[![Build Status](https://img.shields.io/travis/plasticinejs/plasticine.js/master.svg?style=flat-square)](https://travis-ci.org/plasticinejs/plasticine.js)
[![Dependency Status](https://img.shields.io/david/plasticinejs/plasticine.js.svg?style=flat-square)](https://david-dm.org/plasticinejs/plasticine.js)
[![devDependency Status](https://img.shields.io/david/dev/plasticinejs/plasticine.js.svg?style=flat-square)](https://david-dm.org/plasticinejs/plasticine.js#info=devDependencies)
[![Latest Stable Version](https://img.shields.io/npm/v/plasticine.js.svg?style=flat-square)](https://www.npmjs.com/package/plasticine.js)
[![NPM Downloads](https://img.shields.io/npm/dm/plasticine.js.svg?style=flat-square)](https://www.npmjs.com/package/plasticine.js)

Homepage http://plasticinejs.github.io/plasticine.js/

Here is a complete overview of the JSONPath syntax:

| Operator                  | Description                                                        |
| :------------------------ | :----------------------------------------------------------------- |
| `$`                       | Root node. Required as first character of path.                    |
| `@`                       | Current node. Available in filters and expressions.                |
| `*`                       | Wildcard. Available anywhere a name or numeric are required.       |
| `..`                      | Deep wildcard. Available anywhere a name is required.              |
| `.<name>`                 | Dot-notated child                                                  |
| `['<name> (, <name>)']`   | Bracket-notated child or children                                  |
| `[<number> (, <number>)]` | Indexed child or children                                          |
| `[?(<expression>)]`       | Filter expression. Expression must evaluate to a boolean value.    |
| `[(<expression>)]`        | Expression. Expression must evaluate to a string or numeric value. |
