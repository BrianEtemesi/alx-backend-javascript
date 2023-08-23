#!/usr/bin/env node

const fs = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    const info = [];
    if (data) {
      const lines = data.trim().split('\n'); // split the file into an array of lines
      const studentData = lines.slice(1); // remove the first line (header)
      const generalData = `Number of students: ${studentData.length}`;
      info.push(generalData);

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
        const fieldData = `Number of students in ${item}: ${num}. List: ${joinedList}`;
        info.push(fieldData);
      });
    }
    resolve(info.join('\n'));
  });
});

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(DB_FILE)
      .then((data) => {
        res.end(data);
      })
      .catch((err) => {
        res.end(err instanceof Error ? err.message : err.toString());
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
