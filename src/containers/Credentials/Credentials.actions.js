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

const credentialsLoadingFinished = ( token ) => ({ 
    type: "CREDENTIALS_LOADING_FINISHED"
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
				(token, username) => {
					dispatch(credentialSuccess(token));
					sessionStorage.setItem('token', token)
					sessionStorage.setItem('username', username)
					dispatch(profileActions.fetchingProfile())
					dispatch(modalActions.hideRegisterModal())
					// history.goBack() //profile push below adds 2 arguments of the instance
					// history.push("/profile/" + sessionStorage.getItem("username"));
					history.push("/profile/");
					
				},
				error => {
					dispatch(credentialsFailure(error));
				}
			);
    };
}

const login = (email, password) => {
	
	return dispatch => {
		dispatch(checkingCredentials(email));
		
		signinService.login(email, password)
			.then(
				response => {
					const { token, username } = response
					// HIDE LOADER SHOW SUCCESS CHECKBOX?
					dispatch(credentialSuccess({ token, username }));
					dispatch(profileActions.fetchingProfile())
					setTimeout( ( ) => {
						dispatch(modalActions.hideSigninModal())
						dispatch(credentialsLoadingFinished())
					}, 1200)//for SPINNER!
					history.push('/profile/'+sessionStorage.getItem('username'));
				}
			)
			.then(
				dispatch(modalActions.hideSigninModal())
			)
			.catch(
				error => {
					dispatch(credentialsFailure(error));
					return error === 'Unauthorized' // response from passport when credentials are not matching
						? ( alert(`${error}: Wrong Credentials`),
							dispatch(modalActions.showSigninModal()))
						: ( history.push('/About'),
							alert('There seems to be an error with our servers, please try again later'),
							console.error('There was an error', error))
				}
			)
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
