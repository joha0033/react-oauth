import { URL } from './routesPicker'
import { userData } from './userData'

//async fetch function for posting user data.
export async function PostData(isNewUser, data) {

  let BaseURL = URL(isNewUser)

  let payload = userData(data)

  //Post data with fetch
  let response = await fetch(BaseURL, payload)
  
  let res = response.json()

  //if the response in gold
  if(response.status === 200 || response.status === 201) {
    return res;
  }

  //if respones is shit, throw error
  throw new Error(response.status);

}
