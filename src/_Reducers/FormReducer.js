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
		console.log(state.formState.input);
		
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
		return state.formState.input[action.payload] === "" ?
		state :
		{
		...state,
			formState:{
				...state.formState,
				blurred: {
					...state.formState.blurred,
						[action.payload]: true
				}
			}
		}
	default:
		return state;
	}
};