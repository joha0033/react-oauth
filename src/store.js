import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./_Reducers";

let middleware;
process.env.NODE_ENV === "development" ?
	middleware = applyMiddleware(thunk, logger) :
	middleware = applyMiddleware(thunk);
export default createStore(
	rootReducer, 
	{}, 
	middleware
);