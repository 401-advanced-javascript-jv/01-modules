'use strict';

const arithmetic = require('../lib/arithmetic.js');
const greet = require('../lib/greet.js');

describe('arithmetic functions', () => {

  describe('arithmetic.add', () => {
    it('takes numbers as parameters, in any quantity > 0', () => {
      expect(arithmetic.add(2)).toStrictEqual(2);
      expect(arithmetic.add(1, 3)).toStrictEqual(4);
      expect(arithmetic.add(2, 4, 8, 10)).toStrictEqual(24);
    });
    it('returns null if any parameter is not a number', () => {
      expect(arithmetic.add('bob', 2)).toBeNull();
    });
    it('returns null with no parameters', () => {
      expect(arithmetic.add()).toBeNull();
    });
  });
  
  describe('arithmetic.subtract', () => {
    it('takes numbers as parameters, in any quantity > 0', () => {
      expect(arithmetic.subtract(2)).toStrictEqual(2);
      expect(arithmetic.subtract(4, 2)).toStrictEqual(2);
      expect(arithmetic.subtract(5, 3, 8)).toStrictEqual(-6);
    });
    it('returns null if any parameter is not a number', () => {
      expect(arithmetic.subtract('moo')).toBeNull();
      expect(arithmetic.subtract('wibble', 8)).toBeNull();
      expect(arithmetic.subtract(8, 'foo')).toBeNull();
    });
    it('returns null with no parameters', () => {
      expect(arithmetic.subtract()).toBeNull();
    });
  });
  
  describe('arithmetic.multiply', () => {
    it('takes numbers as parameters, in any quantity > 0', () => {
      expect(arithmetic.multiply(4)).toStrictEqual(4);
      expect(arithmetic.multiply(2, 4)).toStrictEqual(8);
      expect(arithmetic.multiply(1, 8, .5)).toStrictEqual(4);
    });
    it('returns null if any parameter is not a number', () => {
      expect(arithmetic.multiply('fweep', 2)).toBeNull();
      expect(arithmetic.multiply(3, 'chee')).toBeNull();
    });
    it('returns null with no parameters', () => {
      expect(arithmetic.multiply()).toBeNull();
    });
  });
  
  describe('arithmetic.divide', () => {
    it('takes two numbers as parameters', () => {
      expect(arithmetic.divide(3, 2)).toStrictEqual(1.5);
      expect(arithmetic.divide(4, .5)).toStrictEqual(8);
    });
    it('returns NaN when the second parameter is 0 (no dividing by 0)', () => {
      expect(arithmetic.divide(2, 0)).toBeNaN();
    });
    it('returns null if a parameter is not a number', () => {
      expect(arithmetic.divide('fishy', 'bob')).toBeNull();
    });
  });
});

describe('greet function', () => {
  it('expects a string', () => {
    expect(greet('world')).toStrictEqual('hello world');
  });
  it('returns null when called with anything but a string', () => {
    expect(greet(42)).toBeNull();
  });
});
