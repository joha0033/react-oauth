import { profileService } from './Profile.service'
import { credentialActions } from '../containers/Credentials/Credentials.actions'
// import { signinService } from '../containers/Credentials/Signin/signinService'
import history from '../_Helpers/history.js';

const fetchingProfile = (token, username) => ({
    type: 'FETCHING_PROFILE',
    payload: {
        username, 
        token
    }
})

const profileSuccess = (userProfile) => {
    return {
        type: 'PROFILE_SUCCESS',
        payload: userProfile
    }
}

const profileFailure = (error) => ({
    type: 'PROFILE_FAILURE',
    payload: error
})

const fetchingUsersPosts = (token, username) => {
    return {
        type: 'FETCHING_USERS_POSTS',
        payload: {
            username, 
            token
        }
    }
}

const usersPostSuccess = (usersPosts) => {
    return {
        type: 'USER_POSTS_SUCCESS',
        payload: usersPosts
    }
}

const userPostFailure = (error) => {
    return {
        type: 'USER_POSTS_FAILURE',
        payload: error
    }
}

const profileEditSubmitted = (change) => {
    let token = sessionStorage.getItem('token')
    let username = sessionStorage.getItem('username')

    return {
        type: 'PROFILE_EDIT_SUBMITTED',
        crendentials: {
            token,
            username
        },
        payload: change
    }
}

const fetchUsersPosts = (token) => {
    return dispatch => {
        dispatch(fetchingUsersPosts())
        profileService.fetchUsersPosts(token)
            .then((userPosts) => {
                dispatch(usersPostSuccess(userPosts));
                return userPosts
            }, (error) => {
                sessionStorage.clear()
                history.push('../home')
                dispatch(userPostFailure(error))
            })
            .then((userProfile) => {
            return userProfile
        })
    }
}

const fetchProfile = (token, home) => {
    return dispatch => {
        dispatch(fetchingProfile());
        
        profileService.fetchProfile(token)
            .then((userProfile) => {
                dispatch(profileSuccess(userProfile));
                return userProfile
            }, (error) => {
                dispatch(credentialActions.logout())
                history.push('/About')
                sessionStorage.clear()
                dispatch(profileFailure(error))
            }).then((userProfile) => {
                    return userProfile
        })
    };
}



const profileEditSuccess= (response) => {
    return {
        type: 'PROFILE_EDIT_SUCCESS',
        payload: response
    }
}

const changeData = (change, token) => {
    // let username = sessionStorage.getItem('username')
    return dispatch => {
        
        dispatch(profileEditSubmitted(change))

        profileService.editProfile(change, token).then((updated) => {
            console.log('updated', updated);
            const { username } = updated.response.updatedData
            dispatch(profileEditSuccess(updated.updatedData));
            history.push('/profile/' + username);
        }).catch((err) => {
            console.log('err',err);
        })
    }
    
}

const destroyProfile = (payload) => {
    const destroyer = () => ({
        type: "DESTROY_PROFILE",
        payload
    })

    return dispatch => dispatch(destroyer())
}

export const profileActions = {
    fetchingProfile,
    fetchProfile,
    changeData,
    destroyProfile,
    fetchingUsersPosts,
    fetchUsersPosts
}