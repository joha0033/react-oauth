import { userActions } from "../../CredentialForms/Signin/userActions"


const logout = () => userActions.logout();

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
	console.log('Show Modal!');

    const showRegister = () => ({
		type: "SHOW_REGISTER_MODAL",
		payload: true
	})

	return dispatch => {
		dispatch(showRegister());
	};
}

const hideModal = () => {
	const hide = () => ({
		type: "HIDE_MODAL",
		payload: false
		})
		
	return dispatch => {
		dispatch(hide());
	};
}

export const dropdownActions = {
	showSigninModal,
	showRegisterModal,
    hideModal,
    logout
}