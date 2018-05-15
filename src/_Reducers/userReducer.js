let token = sessionStorage.getItem('token')

const initialState = token ? { loggedIn: true, token } : { loggedIn: false };

export const user = (
	state = initialState,
	action
) => {
	switch (action.type) {
	case "CHECKING_CREDENTIALS":
		return {
			...state,
			loading: true,
			user: action.payload.credentials
		};
	case "CERDENTIAL_SUCCESS":
		return {
			...state,
			loggedIn: true,
			token: action.payload.token
		};
	case "CERDENTIAL_FAILURE":
		return {};
	case "CLEAR_CREDENTIALS":
		return {
			loggedIn: false
		};
	default:
		return state;
	}
};


