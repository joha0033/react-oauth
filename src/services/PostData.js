import { URL } from './routesPicker'
import { userData } from './userData'

//async fetch function for posting user data.
export async function PostData(type, data) {

  //work done by improts
  let BaseURL = URL(type)
  let payload = userData(data)

  //Post data with fetch
  let response = await fetch(BaseURL, payload)
  
  //if the response in gold
  if(response.status === 200) {
    return response.json();
  }

  //if respones is shit, throw error
  throw new Error(response.status);

}



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
