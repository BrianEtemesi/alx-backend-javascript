export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList.filter((student) => student.location === city).map((student) => {
    student.grade = 'N/A';
    for (const g of newGrades) {
      if (g.studentId === student.id) {
        student.grade = g.grade;
      }
    }
    return student;
  });
}
