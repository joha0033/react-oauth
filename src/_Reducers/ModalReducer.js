export const modal = (
	state = {showModal: false},
	action
) => {
	switch (action.type) {
	case "SHOW_SIGNIN_MODAL":
		return {
			...state,
			showSigninModal: action.payload
		};
	case "SHOW_REGISTER_MODAL":
		return {
			...state,
			showRegisterModal: action.payload
		};
	case "HIDE_SIGNIN_MODAL":
		return {
			...state,
			showSigninModal: action.payload,
			closeFunction: action.closeFunction
		};
	case "HIDE_REGISTER_MODAL":
		return {
			...state,
			showRegisterModal: action.payload,
			closeFunction: action.closeFunction
		};
	default:
		return state;
	}
};