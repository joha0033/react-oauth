export const modal = (
	state = {showModal: false},
	action
) => {
	switch (action.type) {
	case "SHOW_MODAL":
		return {
			...state,
			showModal: action.payload
		};
	case "HIDE_MODAL":
		return {
			...state,
			showModal: action.payload,
			closeFunction: action.closeFunction
		};
	default:
		return state;
	}
};