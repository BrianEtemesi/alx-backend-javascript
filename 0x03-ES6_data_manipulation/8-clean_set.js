export default function cleanSet(set, startString) {
  // convert set to array
  if (startString === '' || startString !== 'string') {
    return '';
  }
  const filteredValues = Array.from(set)
    .filter((value) => value.startsWith(startString)) // keep only values starting with startString
    .map((value) => value.slice(startString.length)); // remove startstring from each value

  return filteredValues.join('-');
}
