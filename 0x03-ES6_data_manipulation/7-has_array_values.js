export default function hasValuesFromArray(set, array) {
  // iterate over array and check if value is in set
  return array.every(value => set.has(value));
}
