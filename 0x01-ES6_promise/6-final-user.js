import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = await signUpUser(firstName, lastName);
  const newUserObject = {
    status: 'resolved',
	value: userPromise
  };

  const photoPromise = await uploadPhoto(fileName).catch((error) => {
    return error.toString();
  });
  const newPhotoObject = {
    status: 'rejected',
	value: photoPromise
  }

  return [newUserObject, newPhotoObject];
}
