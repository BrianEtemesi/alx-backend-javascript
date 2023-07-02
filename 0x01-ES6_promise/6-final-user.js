import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const obj = Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  return obj;
}
