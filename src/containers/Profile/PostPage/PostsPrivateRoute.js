import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Posts from './Post'

class PostsPrivateRoute extends Component {
    render(){
        return (
            this.props.profile.success === true ? (
                <div>
                    {console.log(this.props)}
                    <Route exact to={this.props.profile.details.username} component={Posts}/>
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

  export default connect(mapStateToProps)(PostsPrivateRoute)