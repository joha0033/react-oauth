import { inputProps, stateData } from "../_Helpers/CredentialsFormData"
// change developmentEditData TO developmentRegisterData, below when testing singin/signup
// change developmentRegisterData TO developmentEditData, below when testing edit
import {  developmentRegisterData } from "../_Helpers/DevelopmentFormData"

let envDev = process.env.NODE_ENV

const initialState = {
	formProps: inputProps,
	formState: envDev ? developmentRegisterData : stateData,
	// formState: stateData,
	registerFormInput: {}
}


export const form = (
	state = initialState,
	action
) => {
	console.log(action);
	
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
	case "HANDLE_PROFILE_IMAGE":
		return { 
			...state,
				formState:{
					...state.formState,
					input: {
						...state.formState.input,
							profileImage: {...action.payload}
					}
				}
				
		}
	case "HANDLE_BANNER_IMAGE":
		return { 
			...state,
				formState:{
					...state.formState,
					input: {
						...state.formState.input,
							bannerImage: {...action.payload}
					}
				}
				
		}
	case "CLEAR_FORM":
		return state = initialState
	default:
		return state;
	}
};