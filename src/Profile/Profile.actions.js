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
        payload: userProfile.payload
    }
}
const profileFailure= (error) => ({
    type: "PROFILE_FAILURE",
    payload: error
})


const fetchProfile = () => {
    
    const credentials = {
        token: sessionStorage.getItem("token"),
        userId: sessionStorage.getItem("id")
    }

    console.log(credentials);
    

    return dispatch => {
        dispatch(fetchingProfile( {credentials} ));
        
        profileService.fetchProfile(credentials).then((userProfile) => {
            dispatch(profileSuccess(userProfile));
            history.push("/profile/"+credentials.userId);
            return userProfile
        })
    };
}

export const profileActions = {
    fetchProfile
}