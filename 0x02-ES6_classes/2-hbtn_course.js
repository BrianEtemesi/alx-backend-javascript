export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!students.every((item) => typeof item === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

// setter methods for name, length and students
  set name(setName) {
    if (typeof setName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = setName;
  }

  set length(setLength) {
    if (typeof setLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = setLength;
  }

  set students(setStudents) {
    if (!Array.isArray(setStudents)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!setStudents.every((item) => typeof item === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = setStudents;
  }

// get methods for name, length and students
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
