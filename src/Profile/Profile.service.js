
const fetchProfile = (token) => {
    let options = {
      headers: {
        authorization: token
      }
    }
    
    let URL = `http://localhost:5000/users/profile/`
    
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

const fetchUsersPosts = (token) => {
    let options = {
      headers: {
        authorization: token
      }
    }
    
    let URL = `http://localhost:5000/users/profile/posts`
    
    return fetch(URL, options)
        .then(response => {
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }

            return response.json();
        })
        .then(response => {
            if (response) {
                return response.posts
            }

            return null
        });
}

const editProfile = (changes, token) => {
    console.log(changes);
    
    let options = {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'authorization': token
        },
        body: JSON.stringify(changes)
    }

    let URL = `http://localhost:5000/users/profile/edit`
    
    return fetch(URL, options)
        .then(response => {
            console.log('response',response);
            
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(response => {
            let newProfile = fetchProfile(token).then(res => res.json)
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
    editProfile,
    fetchUsersPosts
}