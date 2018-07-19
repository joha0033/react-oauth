import { inputProps, stateData } from "../_Helpers/CredentialsFormData"
// change developmentEditData TO developmentRegisterData, below when testing singin/signup
// change developmentRegisterData TO developmentEditData, below when testing edit
import {  developmentRegisterData } from "../_Helpers/DevelopmentFormData"

console.log(process.env.NODE_ENV);

let envDev = process.env.NODE_ENV

const initialState = {
	formProps: inputProps,
	formState: envDev ? developmentRegisterData : stateData,
	registerFormInput: {}
}


export const form = (
	state = initialState,
	action
) => {
	switch (action.type) {
	case "INPUT_CHANGE":
		return { 
			...state,
				formState:{
					...state.formState,
					input: {
						...state.formState.input,
							[action.key]: action.value
					}
				}
				
		}
	case "BLUR_CHANGE":
		console.log(action.payload);
		console.log(state.formState.input);
		console.log(state.formState.input[action.payload]);
		
		
		return state.formState.input[action.payload] !== "" ?
		{
			...state,
				formState:{
					...state.formState,
					blurred: {
						...state.formState.blurred,
							[action.payload]: {
								...state.formState.blurred[action.payload],
									error: false
						}
					}
				}
			} :
		{
		...state,
			formState:{
				...state.formState,
				blurred: {
					...state.formState.blurred,
						[action.payload]: {
							...state.formState.blurred[action.payload],
								error: true
					}
				}
			}
		}
	case "CLEAR_FORM":
		return state = initialState
	default:
		return state;
	}
};