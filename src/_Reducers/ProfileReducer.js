
export const profile = (
	state = {loading: true},
	action
) => {
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
			details: action.payload.profile
		}
	case "PROFILE_FAILURE":
		return {};
	default:
		return state;
	}
};