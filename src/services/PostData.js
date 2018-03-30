import { URL } from './routesPicker'
import { userData } from './userData'

//async fetch function for posting user data.
export async function PostData(type, data) {
  //work done by improts
  let BaseURL = URL(type)
  let payload = userData(data)
  // console.log('9 BaseURL, payload', BaseURL, payload);

  //Post data with fetch
  let response = await fetch(BaseURL, payload)
  let res = response.json()
  // console.log('14 res', res);

  //if the response in gold
  if(response.status === 200 || response.status === 201) {
    return res;
  }

  //if respones is shit, throw error
  throw new Error(response.status);

}
