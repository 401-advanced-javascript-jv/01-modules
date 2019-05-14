'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(a,b) {
  if ( !isNumber(a) || !isNumber(b)) { return null; }
  return a+b;
};

arithmetic.subtract = function (a,b) {
  if ( !isNumber(a) || !isNumber(b)) { return null; }
  return a-b;
};

arithmetic.multiply = function (a, b) {
  if ( !isNumber(a) || !isNumber(b) ) return null;
  return a * b;  
};

arithmetic.divide = function (a, b) {
  if ( !isNumber(a) || !isNumber(b) || b === 0 ) return null;
  return a / b;
};

function isNumber (input) {
  if (typeof input !== 'number') return false;
  return true;
}