import { userActions } from "../../CredentialForms/Signin/userActions"


const logout = () => userActions.logout();

const showModal = (formType) => {
	console.log('Show Modal!');

    const show = () => ({
		type: "SHOW_MODAL",
		payload: true
	})

	return dispatch => {
		console.log('showModal in Actions');
		dispatch(show());
	};
}

const hideModal = () => {
	console.log('Hide Modal!');
	const hide = () => ({
		type: "HIDE_MODAL",
		payload: false
		})
		
	return dispatch => {
		console.log('hideModal in Actions');
		dispatch(hide());
	};
}

export const dropdownActions = {
    showModal,
    hideModal,
    logout
}