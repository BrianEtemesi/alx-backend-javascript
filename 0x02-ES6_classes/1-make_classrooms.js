import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classRooms = [];
  const sizes = [19, 20, 34];
  for (const size of sizes) {
    classRooms.push(new ClassRoom(size));
  }
  return classRooms;
}
