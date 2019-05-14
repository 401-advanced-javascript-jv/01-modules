'use strict';

let greet = module.exports = exports = function(name) {
  if ( isString(name) ) return `hello ${name}`;
  return null;
};

function isString(arg) {
  return typeof arg === 'string' ? true : false;
}
