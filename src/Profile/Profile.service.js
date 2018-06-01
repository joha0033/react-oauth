
const fetchProfile = (credentials) => {
    console.log("FETCH?", credentials);

    let options = {
      headers: {
        authorization: credentials.token
      }
    }

    let URL = `http://localhost:5000/users/profile/${credentials.userId}`
    console.log(URL);
    
    return fetch(URL, options)
        .then(response => {
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(response => {
            if (response) {
                return response
            }
            return null
        });
}

export const profileService = {
    fetchProfile
}