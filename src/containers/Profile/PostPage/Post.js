import React from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { profileActions } from '../../../Profile/Profile.actions';

class Post extends React.Component{

    componentDidMount(){
        let token = this.props.credentials.token
        this.props.fetchUsersPosts(token) 
    }  
     
    render(){
        const getPosts = () => {
            let posts = this.props.profile.details.posts
            return posts 
                ? posts.map((p,i) => <div key={i}><h1>{p.title}</h1></div>) 
                : (<h1>waiting!</h1>)
        }

        return(
            <div>
                <h1>POSTS</h1>
                {getPosts()}               
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { credentials, profile } = state
    return {
        credentials,
        profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProfile: (credentials) => {
              dispatch(profileActions.fetchProfile(credentials))
            },
        fetchUsersPosts: (credentials) => {
            dispatch(profileActions.fetchUsersPosts(credentials))
        },
        fetchingUsersPosts: () => {
            dispatch(profileActions.fetchingUsersPosts())
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)