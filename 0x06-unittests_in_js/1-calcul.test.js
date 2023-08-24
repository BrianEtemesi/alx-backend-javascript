const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('rounds & sum; 2 whole numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 2.0, 4.0), 6);
    });
    
    it('rounds & sum; 2 fractional float numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 2.4, 4.6), 7);
    });
  });

  describe('SUBTRACT - rounds & returns difference', function () {
    it('2 whole numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 5, 2), 3);
    });

    it('2 fractional float numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.6, 2.2), 4);
    });

    it('1 whole, other fractional float', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 10, 1.7), 8);
    });
  });

  describe('DIVIDE - rounds and divides 2 numbers', function () {
    it('2 whole numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 5), 2);
    });

    it('2 fractional float numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 44.4, 10.6), 4);
    });

    it('1 whole number, other fractional float', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 31.8, 2), 16);
    });

    it('divisor that rounds to zero', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 0.3), 'Error');
    });
  })
});
