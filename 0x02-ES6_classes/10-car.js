export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // method to return new object of this class
  cloneCar() {
    return new this.constructor();
  }
}
