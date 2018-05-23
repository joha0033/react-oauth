import { authService } from "../_Services/authService";
import history from "../_Helpers/history.js";
//NOT IMPLEMENTED YET... LocalStoreage?
const resetToken = (token) => {

	const reauthorizingToken = ( credentials ) => ({
        type: "CHECKING_CREDENTIALS",
		payload: credentials
    })
    const reauthTokenSuccess = (token) => ({
        type: "CERDENTIAL_SUCCESS",
		payload: token
    })
    const reauthTokenFailure = (error) => ({
        type: "CERDENTIAL_FAILURE",
		payload: error
	})
	
	const credentials = token
	return (dispatch) => {
		dispatch(registering({ credentials }));

		authService.resetToken(token)
			.then(
				token => {
					dispatch(reauthTokenSuccess(token));
				},
				error => {
					dispatch(reauthTokenFailure(error));
				}
			);
    };   
} 

export const authService = {
	resetToken
}