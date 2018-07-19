import { registerService } from "./Register/registerService";
import { signinService } from "./Signin/signinService";
import { modalActions } from "../Modals/Modal.actions"
import history from "../../_Helpers/history.js";
import { profileActions } from '../../Profile/Profile.actions'
const checkingCredentials = (credentials) => ({ 
    type: "CHECKING_CREDENTIALS",
    payload: credentials
})
const credentialSuccess = ( token ) => ({ 
    type: "CERDENTIAL_SUCCESS",
    payload: token
})
const credentialsFailure = (error) => ({
    type: "CERDENTIAL_FAILURE",
    payload: error
})

const register = (newUser) => {
	
	const { 
		firstName, 
		lastName, 
		email, 
		password 
		} = newUser
		
	

	const credentials = email

	return dispatch => {
		dispatch(checkingCredentials({ credentials }));

		registerService.register(firstName, lastName, email, password)
			.then(
				token => {
					dispatch(credentialSuccess(token));
					dispatch(profileActions.fetchingProfile())
					dispatch(modalActions.hideRegisterModal())
					history.push("/profile/" + sessionStorage.getItem("username"));
				},
				error => {
					dispatch(credentialsFailure(error));
				}
			);
    };
}

const login = (email, password) => {

	const credentials = email

	return dispatch => {
		dispatch(checkingCredentials({ credentials }));

		signinService.login(email, password)
			.then(
				token => {
					dispatch(credentialSuccess(token));
					dispatch(modalActions.hideSigninModal())
					history.push('/profile/' + sessionStorage.getItem("username"));
				},
				error => {
					dispatch(credentialsFailure(error));
				}
			);
	};
}

const logout = () => {

	const loggingOut = () => ({
		type: "CLEAR_CREDENTIALS",
		payload: false
	})

	signinService.logout();
	
	return dispatch => {
		history.push('/')
		dispatch(loggingOut());
	};
	
}

export const credentialActions = {
	login,
    logout,
    register
};
