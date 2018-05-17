const facebookAuthenticate = (response) => {
	let {  name } = response;
	name = name.split(" ");
	let facebookLogin = {
		firstName: name[0], 
		lastName: name[1],
		email: response.email,
		provider_id: response.id
	};
	
	let accessToken = response.accessToken;
	
	const requestOptions = {
		method: "POST",
		body: JSON.stringify(facebookLogin),
		headers: {
			"access_token": accessToken,
			"content-type": "application/json"
		}
	};
	
	let URL;
	process.env.NODE_ENV === "development" ?
		URL = "http://localhost:5000/users/oauth/facebook" :
		URL = "https://murmuring-everglades-26713.herokuapp.com/users/oauth/facebook";
		
	return fetch(URL, requestOptions)
		.then(response => {
			if (!response.ok) { 
				return Promise.reject(response.statusText);
			}
			return response.json();
		})
		.then(response => {
			if (response.token) {
				// store user details and jwt token in local storage to keep user logged in between page refreshes
				sessionStorage.setItem("token", response.token);
			}
			return response;
		});

};

export const facebookService = {
	facebookAuthenticate
}