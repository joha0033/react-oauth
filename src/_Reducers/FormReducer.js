import { inputProps, stateData } from "../_Helpers/CredentialsFormData"
import { developmentStateData } from "../_Helpers/DevelopmentFormData"

console.log(process.env.NODE_ENV);

let envDev = process.env.NODE_ENV

const initialState = {
	formProps: inputProps,
	formState: envDev ? developmentStateData : stateData,
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