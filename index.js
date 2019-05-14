'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
// console.log(greet('JOHN'));
console.log(math.add(1,3)); // 4
console.log(math.add(3, 'bob')); // null
console.log(math.add(2, 4, 8)); // 14
console.log(math.add([3, 4, 5])); // null
console.log(math.subtract(1,3)); // -2
console.log(math.subtract(1, 3, 4, 5, 6, 7)); // -24
console.log(math.subtract('fish', 3)); // null
console.log(math.subtract(8, 2, 2)); // 4
console.log(math.multiply(2, 3)); // 6
console.log(math.multiply(1, .5)); // 0.5
console.log(math.multiply(2, 3, 4, 5)); // 120
console.log(math.divide(2, 0)); // NaN
console.log(math.divide(6, 2)); // 3
