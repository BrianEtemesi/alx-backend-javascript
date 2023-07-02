export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'number') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
    if (typeof lenght !== 'number') {
      throw new TypeError('Lenght must be a number');
    }
    this._length = length;

    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!students.every((item) => typeof item === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(setName) {
    this._name = setName;
  }

  get length() {
    return this._length;
  }

  set length(setLength) {
    this._length = setLength;
  }

  get students() {
    return this._students;
  }

  set students(setStudents) {
    this._students = setStudents;
  }
}
