#!/usr/bin/env node

const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', function() {
  it('rounds two numbers and returns their sum', function() {
    const result = calculateNumber(1.2, 3.7);
    assert.equal(result, 5);
  });
});

