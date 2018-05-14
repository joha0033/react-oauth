/*eslint-disable */

const login = (email, password) => {

    console.log('4 userService - login(email, password):', email, password);
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };
    
    let BaseURL = "http://localhost:5000/users/signin";

    return fetch(BaseURL, requestOptions)
        .then(response => {
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }

            return response.json();
        })
        .then(response => {
            console.log(response);
            
            if (response.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                sessionStorage.setItem('token', response .token);
            }

            return response;
        })

    throw new Error(response.status);

};
/*eslint-enable */

const resetToken = () => {
	const token = sessionStorage.getItem("token");
    
	const requestOptions = {
		method: "GET",
		headers: { 
			"Content-Type": "application/json" ,
			"Authorization": token
		}
	};
    
	let BaseURL = "http://localhost:5000/users/tokencheck";

	return fetch(BaseURL, requestOptions)
		.then(response => {
			if (!response.ok) { 
				return Promise.reject(response.statusText);
			}

			return response.json();
		})
		.then(response => {
            
			if (response.token) {
				
				sessionStorage.setItem("token", response.token);
			}

			return response;
		});

};

const logout = () => {
	sessionStorage.clear();
};

const register = () => {
	
};

const getAll = () => {
	
};

const _delete = () => {
	
};

export const userService = {
	login,
	resetToken,
	logout,
	register,
	getAll,
	delete: _delete
};
