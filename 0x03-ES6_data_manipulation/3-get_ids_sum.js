export default function getStudentIdsSum(studentList) {
  // get sum of all student id values
  return studentList.reduce((sum, student) => sum + student.id, 0);
}
