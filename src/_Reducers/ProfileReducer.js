
export const profile = (
	state = {},
	action
) => {
    console.log(action.payload);
    
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
			details: action.payload
		}
	case "PROFILE_FAILURE":
		return {};
	default:
		return state;
	}
};