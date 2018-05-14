import { userService } from "../_Services/userService";
import history from "../_Helpers/history.js";



function login (email, password) {
	return dispatch => {
		dispatch(loggingIn({ email }));

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
function loggingIn(email) {
	return (dispatch) => {
		return dispatch({ 
			type: "LOGGING_IN",
			payload: email
		});
	};
	
}
export function resetToken(token) {
	return (dispatch) => {
		userService.resetToken(token)
			.then(
				token => {
					dispatch(loginSuccess(token));
				},
				error => {
					dispatch(loginFailure(error));
				}
			);
	};
}
export function loginSuccess(token) {
	return {
		type: "LOGIN_SUCCESS",
		payload: token
	};
}
export function loginFailure(error) {
	return {
		type: "LOGIN_FAILURE",
		payload: error
	};
}


function logout () {
	userService.logout();
	return dispatch => {
		dispatch(loggingOut({}));
	};
}
function loggingOut() {
	return (dispatch) => {
		return dispatch({ 
			type: "LOGOUT",
			payload: false
		});
	};
	
}





export const userActions = {
	loggingIn,
	login,
	resetToken,
	logout
};




