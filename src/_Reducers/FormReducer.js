import { registerInputProps, registerStateData } from "../_Helpers/RegisterFormData"

const initialState = {
	formProps: registerInputProps,
	formState: registerStateData,
	registerFormInput: {}
}


export const form = (
	state = initialState,
	action
) => {
	switch (action.type) {
	case "REGISTER_INPUT_DATA":
		return {
			...state,
			registerFormData: action.payload
		};
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
	default:
		return state;
	}
};