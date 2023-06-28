/* eslint-disable no-unused-vars */
export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  let employeeNames = [];
  for (const [key, value] of Object.entries(employees)) {
    employeeNames = [...employeeNames, ...value];
  }
  return employeeNames;
}
