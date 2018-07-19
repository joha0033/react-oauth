let token = sessionStorage.getItem('token')

const initialState = token ? { loggedIn: true, token } : { loggedIn: false };

export const credentials = (
	state = initialState,
	action
) => {
	switch (action.type) {
	case "CHECKING_CREDENTIALS":
		return {
			...state,
			loading: true,
			userData: action.payload.credentials
		};
	case "CERDENTIAL_SUCCESS":
		return {
			...state,
			loggedIn: true,
			loading: false,
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


