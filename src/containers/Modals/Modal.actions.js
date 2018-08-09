import { credentialActions } from "../Credentials/Credentials.actions"


const logout = () => credentialActions.logout();

const showSigninModal = (formType) => {

    const showSignin = () => ({
		type: "SHOW_SIGNIN_MODAL",
		payload: true
	})

	return dispatch => {
		dispatch(showSignin());
	};
}

// const showCredentialsModal = (type) => {
// 	console.log('show cred mod',type);
// 	const modalType = (type) => ({
// 		type: "SHOW_MODAL",
// 		payload: type
// 		})
		
// 	return dispatch => {
// 		dispatch(modalType(type));
// 	};
// }

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
	
	const hide = () => ({
		type: "HIDE_REGISTER_MODAL",
		payload: false
		})
		
	return dispatch => {
		dispatch(hide());
	};
}
const hideSigninModal = () => {
	
	const hide = () => ({
		type: "HIDE_SIGNIN_MODAL",
		payload: false
		})
		
	return dispatch => {
		dispatch(hide());
	};
}

export const modalActions = {
	// showCredentialsModal,
	showSigninModal,
	showRegisterModal,
	hideSigninModal,
	hideRegisterModal,
    logout
}