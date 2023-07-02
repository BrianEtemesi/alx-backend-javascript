import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const userObj = {};
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    userObj.photo = photo;
    userObj.user = user;
  } catch (error) {
    userObj.photo = null;
    userObj.user = null;
  }
  return userObj;
}
