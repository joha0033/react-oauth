export const profile = (
	state = {loading: true},
	action
) => {
	switch (action.type) {
	case "FETCHING_PROFILE":
		return {
			...state,
			loading: true
		};
	case "PROFILE_SUCCESS":
		return {
			...state,
			success: true,
			loading: false,
			details: action.payload
		}
	case "PROFILE_FAILURE":
		return { 
			loading: false,
			error: action.payload
		 }
	case "DESTROY_PROFILE":
		return { 
			destroyed: action.payload
		};
	case "PROFILE_EDIT_SUBMITTED":
		return {
			...state,
			editing: true,
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