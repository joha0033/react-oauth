const registerFormData = (RegisterFormInput) => {
    console.log(RegisterFormInput);
    
    const fill = ( propData ) => ({
		type: "REGISTER_INPUT_DATA",
		payload: {...propData}
    })
    
    return dispatch => {
        dispatch(fill(RegisterFormInput))
    }
}

const handleInputChange = (partialKey, partialValue) => {
    const inputChange = (partialKey, partialValue) => ({
        type: "INPUT_CHANGE",
        key: partialKey,
        value: partialValue
    })

    return dispatch => {
        dispatch(inputChange(partialKey, partialValue))
    }
}

const handleBlur = (fieldName) => {
    const blurChange = (fieldName) => ({
        type: "BLUR_CHANGE",
        payload: fieldName
    })

    return dispatch => {
        dispatch(blurChange(fieldName))
    }
}

export const formActions = {
    registerFormData,
    handleInputChange,
    handleBlur
}