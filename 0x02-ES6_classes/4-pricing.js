import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
	}
	if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be Currency object');
	}
	this._amount = amount;
	this._currency = currency;
  }

  // setter methods for amount and currency
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
	}
    this._amount = newAmount;
  }

  set currency(newCurrency) {
	if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be Currency object');
	}
    this._currency = newCurrency;
  }

  // getter methods for amount and currency
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // method to display price
  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`
  }

  // static method to calculate price
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
	}
	if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number')
	}
	return amount * conversionRate;
  }
}
