export default function updateUniqueItems(myMap) {
  try {
    myMap.forEach((value, key, map) => {
      if (value === 1) {
        map.set(key, 100);
      }
    });
  } catch (e) {
    throw new Error('Cannot process');
  }

  return myMap;
}
