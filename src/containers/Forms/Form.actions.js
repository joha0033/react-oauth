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

const handleProfilePicture = (image) => {
    console.log(image);
    
	const profilePicture = (file) => ({
        type: "HANDLE_PROFILE_IMAGE",
        payload: {file}
	})
	
	return dispatch => {
		dispatch(profilePicture(image));
	};
	
}

const handleBannerPicture = (image) => {
    console.log(image);
    
	const bannerPicture = (file) => ({
        type: "HANDLE_BANNER_IMAGE",
        payload: {file}
	})
	
	return dispatch => {
		dispatch(bannerPicture(image));
	};
	
}

export const formActions = {
    handleInputChange,
    handleBlur,
    clearForm,
    handleProfilePicture,
    handleBannerPicture
}