
export const profile = (
	state = {loading: true},
	action
) => {
	console.log('profile reducer - EDITING', action.payload);
	
	switch (action.type) {
	case "FETCHING_PROFILE":
		return {
			...state,
			loading: true,
			credentials: action.payload.credentials
		};
	case "PROFILE_SUCCESS":
		return {
			...state,
			success: true,
			loading: false,
			details: action.payload,
			posts: action.payload.posts
		}
	case "PROFILE_FAILURE":
		return {};
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