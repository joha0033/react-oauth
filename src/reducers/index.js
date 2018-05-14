import { combineReducers } from "redux";

import { user } from "./userReducer";
// import { auth } from "./authReducer";

const rootReducer = combineReducers({
	user
});

export default rootReducer;