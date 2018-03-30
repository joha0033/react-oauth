import { URL } from './routesPicker'
import { userData } from './userData'

//async fetch function for posting user data.
export async function PostData(type, data) {
  console.log(type, data);
  //work done by improts
  let BaseURL = URL(type)
  let payload = userData(data)

  //Post data with fetch
  let response = await fetch(BaseURL, payload)
  let res = response.json()

  //if the response in gold
  if(response.status === 200) {
    return res;
  }

  //if respones is shit, throw error
  throw new Error(response.status);

}
