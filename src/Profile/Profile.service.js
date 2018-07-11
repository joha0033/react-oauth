
const fetchProfile = (credentials) => {
    console.log("FETCH?", credentials);

    let options = {
      headers: {
        authorization: credentials.token
      }
    }

    let URL = `http://localhost:5000/users/profile/${credentials.username}`
    console.log(URL);
    
    return fetch(URL, options)
        .then(response => {
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(response => {
            console.log('response profile service', response);
            if (response) {
                return response
            }
            return null
        });
}

const editProfile = (changes) => {
    console.log("EDIT/PUT?", changes);
    let token = sessionStorage.getItem('token')
    let username = sessionStorage.getItem('username')
    let credentials = {
        token,
        username
    }
    let options = {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'authorization': sessionStorage.getItem('token')
        },
        body: JSON.stringify(changes)
    }

    let URL = `http://localhost:5000/users/profile/${sessionStorage.getItem('username')}/edit`
    console.log(URL);
    
    return fetch(URL, options)
        .then(response => {
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(response => {
            console.log('response profile service', response);
            let newProfile = fetchProfile(credentials).then(res => res.json)
            let updatedProfile = {
                data: newProfile, 
                response
            }
            if (response) {
                return updatedProfile
            }
            return null
        });
}

export const profileService = {
    fetchProfile,
    editProfile
}