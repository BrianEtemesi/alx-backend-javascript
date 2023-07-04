export default function getstudentByLocation(studentList, city) {
  return studentList.filter((student) => student.location === city);
}
