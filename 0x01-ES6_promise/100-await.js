import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const userObj = {};
  try {
    const promise = await  Promise.all([uploadPhoto(), createUser()]);
    userObj.photo = promise[0];
	userObj.user = promise[1];
  } catch (error) {
    userObj.photo = null;
	userObj.user = null;
  }
  return userObj;
}
