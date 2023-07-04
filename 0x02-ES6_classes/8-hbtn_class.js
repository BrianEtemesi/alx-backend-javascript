export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._size = size;
    this._location = location;
  }

  // method to cast instance to a number
  valueOf() {
    return this._size;
  }

  // method to vast instance to a string
  toString() {
    return this._location;
  }
}
