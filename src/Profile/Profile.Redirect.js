import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Profile from '../Profile/Profile.component'



// const PrivateRoute = ({ component: Component, ...rest }) => (
    class PrivateRoute extends Component {
        render(){
            return (
                this.props.credentials.loggedIn === true ? (
                    <div>
                        <Route exact to='/profile/:username' component={Profile}/>
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


  export default connect(mapStateToProps)(PrivateRoute)