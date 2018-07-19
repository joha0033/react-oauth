export const profile = (
	state = {loading: true, destroyed: false},
	action
) => {
	switch (action.type) {
	case "FETCHING_PROFILE":
		return {
			...state,
			destroyed: false,
			loading: true
		};
	case "PROFILE_SUCCESS":
		return {
			...state,
			destroyed: false,
			success: true,
			loading: false,
			details: action.payload
		}
	case "PROFILE_FAILURE":
		return {
			success: false, 
			loading: false,
			error: action.payload
		 }
	case "DESTROY_PROFILE":
		return { 
			loading: false,
			destroyed: true
		};
	case "PROFILE_EDIT_SUBMITTED":
		return {
			...state,
			loading: true,
			changes: action.payload,
			credentials: action.credentials
		}
	case "PROFILE_EDIT_SUCCESS":
		return {
			...state,
			success: true,
			loading: false,
			changes: action.payload
		}
	default:
		return state;
	}
};