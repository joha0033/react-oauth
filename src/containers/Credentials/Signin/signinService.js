const login = (email, password) => {    
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ email, password })
	};
	let URL;
	process.env.NODE_ENV === "development" ?
		URL = "http://localhost:5000/users/signin" :
		URL = "https://murmuring-everglades-26713.herokuapp.com/users/signin";


	return fetch(URL, requestOptions)
		.then(response => {
			if (!response.ok) { 
				return Promise.reject(response.statusText);
			}
			return response.json();
		})
		.then(response => {
			if (response.token) {
				console.log('response signin service', response);
				
				// store user details and jwt token in local storage to keep user logged in between page refreshes
				sessionStorage.setItem("token", response.token);
				sessionStorage.setItem("username", response.username)
				// sessionStorage.setItem("email", response.email)
				
			}
			return response;
		});
};


const logout = () => {
	sessionStorage.clear();
};

export const signinService = {
	login,
	logout
};
