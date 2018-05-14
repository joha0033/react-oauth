export async function AuthorizeToken(token) {

let BaseURL;
  if(process.env.NODE_ENV === 'development'){
    BaseURL ='http://localhost:5000/users/tokencheck'
  }else{
    BaseURL ='https://murmuring-everglades-26713.herokuapp.com/users/tokencheck'
  }


console.log(token);

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
