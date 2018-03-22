export function GetData() {
  // let BaseURL = 'http://localhost:5000/users/oauth/facebook';
  // let BaseURL = 'https://murmuring-everglades-26713.herokuapp.com/users/signUp';
  let BaseURL = 'http://localhost:5000/users/testGET';
  // let BaseURL = 'https://murmuring-everglades-26713.herokuapp.com/users/oauth/facebook'
  console.log(BaseURL);
  return new Promise((resolve, reject) =>{
    console.log('getData');
    fetch(BaseURL)
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
    })
}
