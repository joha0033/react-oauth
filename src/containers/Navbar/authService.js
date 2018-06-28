const resetToken = () => {
	const token = sessionStorage.getItem("token");
    
	const requestOptions = {
		method: "GET",
		headers: { 
			"Content-Type": "application/json" ,
			"Authorization": token
		}
	};
	
	let URL;
	process.env.NODE_ENV === "development" ?
		URL = "http://localhost:5000/users/tokencheck" :
		URL = "https://murmuring-everglades-26713.herokuapp.com/users/tokencheck";


	return fetch(URL, requestOptions)
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

export const authService = {
    resetToken
}