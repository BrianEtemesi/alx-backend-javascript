export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
	}
	this._sqft = sqft;
  }

  // getter method for sqft attribute
  get sqft() {
    return this._sqft;
  }

  // method to throw warning message
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

