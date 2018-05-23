import { combineReducers } from "redux";

import { credentials } from "./CredentialsReducer";
import { modal } from "./ModalReducer";
import { form } from "./FormReducer";

const rootReducer = combineReducers({
	credentials,
	modal,
	form
});

export default rootReducer;