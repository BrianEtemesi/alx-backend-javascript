interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Barak',
  lastName: 'Jak',
  age: 25,
  location: 'Nairobi',
}

const student2: Student = {
  firstName: 'Diana',
  lastName: 'Blance',
  age: 22,
  location: 'Mombasa',
}

const studentsList: Student[] = [student1, student2];

// Render table
const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);
