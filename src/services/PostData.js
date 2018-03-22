export function PostData(type, userData) {
  console.log('userData in PostData + type', userData, type);
  console.log(JSON.stringify(userData));
  // let BaseURL = 'http://localhost:5000/users/oauth/facebook';
  // let BaseURL = 'https://murmuring-everglades-26713.herokuapp.com/users/signUp';
  let BaseURL = 'http://localhost:5000/users/signup';
  // let BaseURL = 'https://murmuring-everglades-26713.herokuapp.com/users/oauth/facebook'
  console.log(BaseURL);
  return new Promise((resolve, reject) =>{
    // userData = JSON.stringify(userData)
    console.log("userData stringify", userData);
    return fetch(BaseURL, {
      body: JSON.stringify(userData), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        // 'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      redirect: 'follow', // *manual, follow, error
      referrer: 'no-referrer', // *client, no-referrer
    })
      .then((response) => {
        console.log(response);
        response.json()
      })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
  }
)}


export function postDataTest(data) {
  // Default options are marked with *
  const BaseURL = 'http://localhost:5000/users/signup'
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
