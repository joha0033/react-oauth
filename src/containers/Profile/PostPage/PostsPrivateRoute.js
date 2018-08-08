import React, { Component } from 'react'
import { Redirect, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Posts from './Post'

class PostsPrivateRoute extends Component {
    componentDidCatch() {
        console.log('fetching?!');
        
        this.fetchPosts()
    }
    fetchPosts() {
        const { token, username } = this.props.credentials
        // this.props.fetchingUsersPosts()
        // this.props.fetchUsersPosts(token, username)
        // this.props.clearForm()
    }

    render(){
        console.log('provate posts');
        
        return (
            this.props.profile.success === true? (
                <div>
                    {console.log('PRIVATE POST',this.props)}
                    <Route component={Posts}/>
                </div>
            ) : (
                <Redirect
                    to={{
                    pathname: "/",
                    state: { from: this.props.location }
                    }}
                />)
                )}
            }
              
  

  const mapStateToProps = (state) => {
      const { profile, credentials } = state
    return {
        profile,
        credentials
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchingUsersPosts: () => {
        dispatch(profileActions.fetchingUsersPosts())
      },
      fetchUsersPosts: (token, username) => {
        dispatch(profileActions.fetchUsersPosts(token, username))
      }
    }
  }

  export default withRouter(connect(mapStateToProps)(PostsPrivateRoute))