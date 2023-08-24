const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('should use Utils.calculateNumber correctly', function() {
    // create a spy on Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // call function to be tested
    sendPaymentRequestToApi(100, 200);
    
    // verify the spy was called with the correct arguments
    sinon.assert.calledWith(calculateNumberSpy, 'SUM', 100, 200);

    // restore the original Utils.calculateNumber function
    calculateNumberSpy.restore();
  });
});
