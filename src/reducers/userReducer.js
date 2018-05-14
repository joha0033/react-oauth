let token = sessionStorage.getItem('token')

const initialState = token ? { loggedIn: true, token } : { loggedIn: false };

export const user = (
state = initialState
, action) => {
	switch (action.type) {
	case "LOGGIN_IN":
		return {
			...state,
			loggingIn: true,
			user: action.payload.email
		};
	case "LOGIN_SUCCESS":
		return {
			...state,
			loggedIn: true,
			token: action.payload.token
		};
	case "LOGIN_FAILURE":
		return {};
	case "LOGOUT":
		return {
			loggedIn: false
		};
	default:
		return state;
	}
};


