#!/usr/bin/env node

const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    const info = ['This is the list of our students']
    readDatabase('database.csv')
      .then((data) => {
        const fields = Object.keys(data);
        fields.forEach((field) => {
          const list = data[field];
          const joinedList = list.join(', ');
          const num = data[field].length;
          const generalInfo = `Number of students in ${field}: ${num}. List: ${joinedList}`;
          info.push(generalInfo);
        });
        const displayInfo = info.join('\n');
        res.status(200).send(displayInfo);
      })
      .catch((err) => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    const parameters = ['CS', 'SWE'];
    if (parameters.includes(major)) {
      readDatabase('database.csv')
        .then((data) => {
          const names = data[major];
          const joinedList = names.join(', ');
          const info = `List: ${joinedList}`;
          res.status(200).send(info);
        })
        .catch((err) => {
          res.status(500).send('Cannot load the database');
        })
    } else {
      res.status(500).send('Major parameter must be CS or SWE') ; 
    }
  }
}

module.exports = StudentsController;
