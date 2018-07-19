import { profileService } from "./Profile.service"
import history from "../_Helpers/history.js";

const fetchingProfile = (credentials) => ({
    type: "FETCHING_PROFILE",
    payload: credentials
})
const profileSuccess= (userProfile) => {
    // console.log('userProfile', userProfile);
    
    return {
        type: "PROFILE_SUCCESS",
        payload: userProfile
    }
}
const profileFailure= (error) => ({
    type: "PROFILE_FAILURE",
    payload: error
})

const profileEditSubmitted = (change) => {
    let token = sessionStorage.getItem('token')
    let username = sessionStorage.getItem('username')

    return {
        type: "PROFILE_EDIT_SUBMITTED",
        crendentials: {
            token,
            username
        },
        payload: change
    }
}




const fetchProfile = () => {
    
    const credentials = {
        token: sessionStorage.getItem("token"),
        username: sessionStorage.getItem("username")
    }

    return dispatch => {
        console.log('fetchprofilehit...');
        
        dispatch(fetchingProfile( {credentials} ));
        
        profileService.fetchProfile(credentials)
            .then((userProfile) => {
                console.log('userProfile', userProfile);
                
            dispatch(profileSuccess(userProfile));
            history.push("/profile/"+credentials.username);
            return userProfile
        }, (error) => dispatch(profileFailure(error)))
    };
}



const profileEditSuccess= (response) => {
    return {
        type: "PROFILE_EDIT_SUCCESS",
        payload: response
    }
}

const changeData = (change) => {
    let username = sessionStorage.getItem('username')
    return dispatch => {
        console.log('71, profile Action:', change);
        
        dispatch(profileEditSubmitted(change))

        profileService.editProfile(change).then((updated) => {
            console.log('updated', updated);
            dispatch(profileEditSuccess(updated.updatedData));
            history.push("/profile/" + username);
        })
    }
    
}

export const profileActions = {
    fetchProfile,
    changeData
}