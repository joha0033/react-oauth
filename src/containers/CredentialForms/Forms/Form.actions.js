const handleInputChange = (partialKey, partialValue, inputRequired) => {
    
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

const clearForm = () => {

	const clearForm = () => ({
		type: "CLEAR_FORM"
	})
	
	return dispatch => {
		dispatch(clearForm());
	};
	
}

export const formActions = {
    handleInputChange,
    handleBlur,
    clearForm
}