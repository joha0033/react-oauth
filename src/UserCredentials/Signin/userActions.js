import { userService } from "./userService";
import history from "../../_Helpers/history.js";

const login = (email, password) => {

	const loggingIn = (credentials) => ({ 
		type: "CHECKING_CREDENTIALS",
		payload: credentials
	})
	const loginSuccess = ( token ) => ({ 
		type: "CERDENTIAL_SUCCESS",
		payload: token
	})
	const loginFailure = (error) => ({
		type: "CERDENTIAL_FAILURE",
		payload: error
	})

	const credentials = email

	return dispatch => {
		dispatch(loggingIn({ credentials }));

		userService.login(email, password)
			.then(
				token => {
					dispatch(loginSuccess(token));
					history.push("/profile");
				},
				error => {
					dispatch(loginFailure(error));
				}
			);
	};
}

const logout = () => {

	const loggingOut = () => ({
		type: "CLEAR_CREDENTIALS",
		payload: false
	})

	userService.logout();
	
	return dispatch => {
		history.push('/')
		dispatch(loggingOut({}));
	};
	
}

export const userActions = {
	login,
	logout
};




