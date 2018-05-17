import { combineReducers } from "redux";

import { credentials } from "./CredentialsReducer";
import { modal } from "./ModalReducer";
// import { auth } from "./authReducer";

const rootReducer = combineReducers({
	credentials,
	modal
});

export default rootReducer;