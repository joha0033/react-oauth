
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
    const URL = `http://localhost:5000/users/profile/edit`
    let {
        profileImage, 
        bannerImage, 
        ...profileEdit
        } = changes
    
        // upload image fetch if images exist create forom data fetch
    if( typeof profileImage === 'object' || typeof bannerImage === 'object' ) {
        const formData = new FormData()

        // eslint-disable-next-line
        profileImage    
            ? formData.append('profileImage', profileImage.file)
            : null
        // eslint-disable-next-line
        bannerImage 
            ? formData.append('bannerImage', bannerImage.file)
            : null
        
        const imageUpdateOptions = {
            method: "PUT",
            headers: {
                'authorization': token
            },
            body: formData
        }

        // ERROR HANDLE THIS BETTER ASYNC AWAIT, TOO
        fetch(URL, imageUpdateOptions)
            .then(response => {
                if (!response.ok) { 
                    return Promise.reject(response.statusText);
                }
                return response.json();
            })
            .then(response => {
                return null
            })  
    } // END of if statement --> if(typeof profileImage = 'object' || bannerImage)
    console.log(profileEdit);
    
    let stringUpdateOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            'authorization': token
        },
        body: JSON.stringify(profileEdit)
    }
    console.log(stringUpdateOptions);
    
    
    return fetch(URL, stringUpdateOptions)
        .then((response) => {
            console.log('response', response);
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }
            return response.json();
        }).then((response) => {
            let newProfile = fetchProfile(response.token)
            let updatedProfile = {
                data: newProfile, 
                response
            }
            if (response) {
                return updatedProfile
            }
        })
}

export const profileService = {
    fetchProfile,
    editProfile,
    fetchUsersPosts
}