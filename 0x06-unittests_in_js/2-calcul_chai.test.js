const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('rounds & sum; 2 whole numbers', function () {
      expect(calculateNumber('SUM', 2.0, 4.0)).to.equal(6);
    });
    
    it('rounds & sum; 2 fractional float numbers', function () {
      expect(calculateNumber('SUM', 2.4, 4.6)).to.equal(7);
    });
  });

  describe('SUBTRACT - rounds & returns difference', function () {
    it('2 whole numbers', function () {
      expect(calculateNumber('SUBTRACT', 5, 2)).to.equal(3);
    });

    it('2 fractional float numbers', function () {
      expect(calculateNumber('SUBTRACT', 5.6, 2.2)).to.equal(4);
    });

    it('1 whole, other fractional float', function () {
      expect(calculateNumber('SUBTRACT', 10, 1.7)).to.equal(8);
    });
  });

  describe('DIVIDE - rounds and divides 2 numbers', function () {
    it('2 whole numbers', function () {
      expect(calculateNumber('DIVIDE', 10, 5)).to.equal(2);
    });

    it('2 fractional float numbers', function () {
      expect(calculateNumber('DIVIDE', 44.4, 10.6)).to.equal(4);
    });

    it('1 whole number, other fractional float', function () {
      expect(calculateNumber('DIVIDE', 31.8, 2)).to.equal(16);
    });

    it('divisor that rounds to zero', function () {
      expect(calculateNumber('DIVIDE', 10, 0.3)).to.equal('Error');
    });
  })
});
