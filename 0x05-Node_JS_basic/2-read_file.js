#!/usr/bin/env node

const fs = require('fs');

function countStudents(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const lines = data.trim().split('\n'); // split the file into an array of lines
    const studentData = lines.slice(1); // remove the first line (header)
    console.log(`Number of students: ${studentData.length}`); // print out number of students

    // get number of students in each field
    const fields = {};
    for (const student of studentData) {
      const studentInfo = student.split(',');
      const firstName = studentInfo[0];
      const field = studentInfo[studentInfo.length - 1];
      if (fields[field]) {
        fields[field].push(firstName);
      } else {
        fields[field] = [];
        fields[field].push(firstName);
      }
    }

    const items = Object.keys(fields);
    items.forEach((item) => {
      const list = fields[item];
      const joinedList = list.join(', ');
      const num = fields[item].length;
      console.log(`Number of students in ${item}: ${num}. List: ${joinedList}`);
    });
  });
}

module.exports = countStudents;
