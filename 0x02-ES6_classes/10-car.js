const cloneCar = Symbol();

export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      throw new TypeError('Brand must be a string');
	}
	if (typeof motor !== 'string') {
      throw new TypeError('Motor must be a string');
	}
	if (typeof color !== 'string') {
      throw new TypeError('Color must be a string');
	}
	this._brand = brand;
	this._motor = motor;
	this._color = color;
  }

  // method to return new object of this class
  [cloneCar]() {
    return new Car(this._brand, this._motor, this._color);
  }
}
