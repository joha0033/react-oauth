export function PostData(type, userData) {
  console.log('userData in PostData + type', userData, type);
let BaseURL = 'https://localhost:5000/users/oauth/facebook';
//let BaseURL = 'http://localhost/socialapi/';

return new Promise((resolve, reject) =>{
fetch(BaseURL+type, {
    method: 'POST',
    body: JSON.stringify(userData)
})
.then((response) => response.json())
.then((res) => {
    resolve(res);
})
.catch((error) => {
   reject(error);
});

});
}
