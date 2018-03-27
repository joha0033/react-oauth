export function PostData(type, userData) {
  require('dotenv').config();
  let BaseURL;
  switch(type) {
    case 'facebook':
      BaseURL = 'https://murmuring-everglades-26713.herokuapp.com/users/oauth/facebook';
      break;
    case 'local':
      BaseURL = 'https://murmuring-everglades-26713.herokuapp.com/users/signup';
      break;
    case 'FAKElocal':
    console.log('userData', userData);
    console.log('type', type);
      BaseURL = ' http://localhost:5000/users/signup'
      break;
    case 'FAKEfacebook':
    console.log('FAKEfbHit');
    console.log('userData', userData);
    console.log('type', type);
      BaseURL = ' http://localhost:5000/users/oauth/facebook'
      break;
    default:
      console.log('not sure of your route type/method. Not recognized.')
      break;
  }
  return new Promise((resolve, reject) =>{
    userData = JSON.stringify(userData)
    return fetch(BaseURL, {
      body: userData, // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      redirect: 'follow', // *manual, follow, error
      referrer: 'no-referrer', // *client, no-referrer
    })
      .then((response) => {
        console.log('response', response);
        return response.json()
      })
        .then((res) => {
          resolve(res);
        })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
  }
)}


export function postDataTest(data) {
  // Default options are marked with *
  const BaseURL = 'http://localhost:5000/users/testPOST'
  console.log('postDataTest hit!', data);
  return fetch(BaseURL, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    // redirect: 'follow', // *manual, follow, error
    // referrer: 'no-referrer', // *client, no-referrer
  })
  .then(response => {
    console.log(response);
    response.json()}) // parses response to JSON
}
