import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise =  signUpUser(firstName, lastName);
  const newUserObject = {
    status: 'resolved',
	value: userPromise
  };

  const photoPromise = uploadPhoto(fileName).catch((error) => {
    return error.toString();
  });
  const newPhotoObject = {
    status: 'rejected',
	value: photoPromise
  }

  return [newUserObject, newPhotoObject];
}
