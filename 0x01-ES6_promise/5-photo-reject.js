export default function uploadPhoto(filename) {
  return Promise.reject(() =>{
    console.log(`${filename} cannot be processed`)
  });
}
