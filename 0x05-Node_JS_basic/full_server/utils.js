#!/usr/bin/env node

const fs = require('fs');

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    const fields = {};
    if (data) {
      const lines = data.trim().split('\n'); // split the file into an array of lines
      const studentData = lines.slice(1); // remove the first line (header)

      // get number of students in each field
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
    }
    resolve(fields);
  });
});

module.exports = readDatabase;
