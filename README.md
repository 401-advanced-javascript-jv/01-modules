# LAB - 01

## Modules

### Author: Jesse Van Volkinburg

### Links and Resources
* [submission PR](https://github.com/401-advanced-javascript-jv/01-modules/pull/2)
* [travis](https://travis-ci.com/401-advanced-javascript-jv/01-modules)

### Modules
#### `arithmetic.js`
##### Exported Values and Methods

###### `.add(a[, b[, ...]]) -> number`
Addition function takes any quantity of number parameters and returns their sum

###### `.subtract(a[, b[, ...]]) -> number`
Subtraction function takes any quantity of number parameters and returns the sequential result of subtraction
(e.g. a - b - ... = result)

###### `.multiply(a[, b[, ...]]) -> number`
Multiplication function takes any quantity of number parameters and returns the product

###### `.divide(a, b) -> number`
Division function takes two parameters and returns the result of `a / b`. Note: b = 0 is disallowed and will return NaN.

#### Tests
* run tests with `npm test`
* All function input types tested - arithmetic functions return null for non-numeric inputs, greeter returns null for non-string inputs.
