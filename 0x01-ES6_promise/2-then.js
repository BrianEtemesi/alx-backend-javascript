/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  const successObj = {
    status: 200,
    body: 'success',
  };
  return promise.then((response) => successObj).catch((error) => error).finally(() => {
    console.log('Got a response from the API');
  });
}
