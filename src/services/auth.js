export async function AuthorizeToken(token) {
  console.log(token);
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXN0aW4iLCJzdWIiOiI1YWJhYzFhZmQ5M2U4MzAwMTQ3ZmU0ZTYiLCJpYXQiOjE1MjIxODg3MTk5NDcsImV4cCI6MTUyMjI3NTExOTk0N30.VxyntTt1U3lR5YrjiBlcIT5VOjK8C73WNboVIWNL9Ms'
  let BaseURL = 'https://murmuring-everglades-26713.herokuapp.com/users/secret'
  return await fetch(BaseURL, {
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json',
        'Authorization': token
      },
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      redirect: 'follow', // *manual, follow, error
      referrer: 'no-referrer', // *client, no-referrer
    }).then((response) => {
      console.log('response', response);
      return response.json()
    })
}
