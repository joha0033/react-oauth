export async function AuthorizeToken(token) {

  // let BaseURL ='https://murmuring-everglades-26713.herokuapp.com/users/tokencheck'
  let BaseURL ='http://localhost:5000/users/tokencheck'

  let response = await fetch(BaseURL, {
      headers: {
        Accept: 'application/json',
        authorization: token
      },
      method: 'GET' // *GET, POST, PUT, DELETE, etc.
    })

    if(response.status ===200){
      return response.json()
    }

    //if respones is shit, throw error
    throw new Error(response.status);
}
