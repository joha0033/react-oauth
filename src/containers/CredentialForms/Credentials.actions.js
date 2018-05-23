import { registerService } from "./Register/registerService";
import { signinService } from "./Signin/signinService";
import { dropdownActions } from "../Navbar/Dropdown/NavDropdownActions"
import history from "../../_Helpers/history.js";


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

const register = (
	newUser
) => {
	console.log(newUser);
	
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
					dispatch(dropdownActions.hideRegisterModal())
					history.push("/profile");
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
					dispatch(dropdownActions.hideSigninModal())
					history.push("/profile");
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
