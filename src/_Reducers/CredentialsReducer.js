// import {profileActions} from '../Profile/Profile.actions'

let initialState;
let token = sessionStorage.getItem('token')

// let profile = token
// 	? profileActions.fetchProfile(token)
// 	: null



// commenting out ternary for token to try and fix server failure catch....wait n/m for now
initialState = token ? { loggedIn: true, token, loading: false } : { loggedIn: false };
// const initialState = { loggedIn: false }

export const credentials = (
	state = initialState,
	action
) => {
	console.log(action.payload, 'ACTION + PAYLOAD');
	
	switch (action.type) {
	case "CHECKING_CREDENTIALS":
		return {
			...state,
			email: action.payload,
			loading: true
		};
	case "CERDENTIAL_SUCCESS":
		return {
			...state,
			loggedIn: true,
			token: action.payload.token,
			username: action.payload.username
		};
	case "CREDENTIALS_LOADING_FINISHED":
		return {
			...state,
			loading: false
		}
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


