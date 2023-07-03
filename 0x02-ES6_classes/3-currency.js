export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._code = code;
    this._name = name;
  }

  // setter methods for code and name
  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = newCode;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // getter method for code and name
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // method to return attributes
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
