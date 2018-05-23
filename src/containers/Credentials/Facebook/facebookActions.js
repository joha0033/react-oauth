import { facebookService } from "./facebookService";
import { modalActions } from "../../Modals/Modal.actions"
import history from "../../../_Helpers/history.js";

const facebookAuthenticate = (response) => {

	const authorizingFacebook = (credentials) => ({ 
		type: "CHECKING_CREDENTIALS",
		payload: credentials
	})
	const facebookSuccess = ( token ) => ({ 
		type: "CERDENTIAL_SUCCESS",
		payload: token
	})
	const facebookFailure = (error) => ({
		type: "CERDENTIAL_FAILURE",
		payload: error
	})

	const credentials = response.email
	return dispatch => {
		dispatch(authorizingFacebook(credentials));
		facebookService.facebookAuthenticate(response)
			.then(
				res => {
					dispatch(facebookSuccess(res));
					dispatch(modalActions.hideRegisterModal())
					dispatch(modalActions.hideSigninModal())
					history.push("/profile");
				},
				error => {
					dispatch(facebookFailure(error));
				}
			);
	};
}

export const facebookActions = {
    facebookAuthenticate
};