export default function getFullResponseFromAPI(success) {
  const successObj = {
    status: 200,
    body: 'Success',
  };

  const failObj = {
    Error: 'The fake API is not working currently',
  };

  const promise = new Promise((resolve, reject) => {
    if (success === true) {
      resolve(successObj);
    } else if (success === false) {
      reject(failObj);
    }
  });

  return promise;
}
