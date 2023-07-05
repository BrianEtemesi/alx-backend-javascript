export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length); // allocate a <length> byte buffer
  const view = new DataView(buffer); // create new DataView to read/write ArrayBuffer
  view.setInt8(position, value); // set value in specified position

  return view;
}
