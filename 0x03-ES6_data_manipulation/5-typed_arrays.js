export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length); // allocate a <length> byte buffer
  const int8Array = new Int8Array(buffer); // create an 8 bit integer typed array

  int8Array[position] = value; // access and manipulate the typed array

  return buffer;
}
