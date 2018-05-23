import { credentialActions } from "../../CredentialForms/Credentials.actions"


const logout = () => credentialActions.logout();

const showSigninModal = (formType) => {
	console.log('Show Modal!');

    const showSignin = () => ({
		type: "SHOW_SIGNIN_MODAL",
		payload: true
	})

	return dispatch => {
		dispatch(showSignin());
	};
}

const showRegisterModal = (formType) => {

    const showRegister = () => ({
		type: "SHOW_REGISTER_MODAL",
		payload: true
	})

	return dispatch => {
		dispatch(showRegister());
	};
}

const hideRegisterModal = () => {
	console.log('hide modal');
	
	const hide = () => ({
		type: "HIDE_REGISTER_MODAL",
		payload: false
		})
		
	return dispatch => {
		dispatch(hide());
	};
}
const hideSigninModal = () => {
	console.log('hide modal');
	
	const hide = () => ({
		type: "HIDE_SIGNIN_MODAL",
		payload: false
		})
		
	return dispatch => {
		dispatch(hide());
	};
}

export const dropdownActions = {
	showSigninModal,
	showRegisterModal,
	hideSigninModal,
	hideRegisterModal,
    logout
}