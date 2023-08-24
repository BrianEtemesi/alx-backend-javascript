#!/usr/bin/env node

const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', function() {
  it('rounds & sum; both fractional numbers', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('rounds & sum; both whole numbers', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('rounds & sum; both whole floating numbers', function() {
    assert.strictEqual(calculateNumber(1.0, 3.0), 4);
  });

  it('rounds & sum; one fractional number', function() {
    assert.strictEqual(calculateNumber(1.2, 3.0), 4);
  });

  it('rounds & sum; second fractional numbers', function() {
    assert.strictEqual(calculateNumber(1.0, 3.7), 5);
  });
});

