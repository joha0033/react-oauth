import { combineReducers } from "redux";

import { credentials } from "./CredentialsReducer";
import { modal } from "./ModalReducer";
import { form } from "./FormReducer";
import { profile } from "./ProfileReducer"

const rootReducer = combineReducers({
	credentials,
	modal,
	form,
	profile
});

export default rootReducer;