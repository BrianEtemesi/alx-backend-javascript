/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList.filter((student) => student.location === city).map((student) => {
    student.grade = 'N/A';
    for (const s of newGrades) {
      if (s.studentId === student.id) {
        student.grade = s.grade;
      }
    }
    return student;
  });
}
