import { registerService } from "./registerService";
import { dropdownActions } from "../../Navbar/Dropdown/NavDropdownActions"
import history from "../../../_Helpers/history.js";

const register = (
	firstName, 
	lastName, 
	email, 
	password
) => {
	
	const registering = (credentials) => ({ 
		type: "CHECKING_CREDENTIALS",
		payload: credentials
	})
	const registerSuccess = ( token ) => ({ 
		type: "CERDENTIAL_SUCCESS",
		payload: token
	})
	const registerFailure = (error) => ({
		type: "CERDENTIAL_FAILURE",
		payload: error
	})

	const credentials = email

	return dispatch => {
		dispatch(registering({ credentials }));

		registerService.register(firstName, lastName, email, password)
			.then(
				token => {
					dispatch(registerSuccess(token));
					dispatch(dropdownActions.hideRegisterModal())
					history.push("/profile");
				},
				error => {
					dispatch(registerFailure(error));
				}
			);
    };
}

export const registerActions = {
    register
};