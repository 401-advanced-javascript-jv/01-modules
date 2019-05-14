'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(...args) {
  let sum = 0;
  for (let arg of args) {
    if ( sum !== null ) {
      if ( isNumber(arg) ) sum += arg;
      else sum = null;
    }
  }
  return sum;
};

arithmetic.subtract = function (...args) {
  let result;
  if ( isNumber(args[0]) ) result = args[0];
  else result = null;
  for (let i = 1; i < args.length; i++) {
    if (result !== null) {
      if ( isNumber(args[i]) ) result -= args[i];
      else result = null;
    }
  }
  return result;
};

arithmetic.multiply = function (...args) {
  let result = 1;
  for (let arg of args) {
    if ( result !== null ) {
      if ( isNumber(arg) ) result *= arg;
      else result = null;
    }
  }
  return result;
};

arithmetic.divide = function (a, b) {
  if ( !isNumber(a) || !isNumber(b) ) return null;
  if (b === 0) return NaN;
  return a / b;
};

function isNumber (input) {
  if (typeof input !== 'number') return false;
  return true;
}