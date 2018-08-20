import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import EditProfile from '../Profile/Profile.Edit'



// const PrivateRoute = ({ component: Component, ...rest }) => (
    class EditPrivateRoute extends Component {
        render(){
            return (
                this.props.profile.success === true ? (
                    <div>
                        <Route exact to={this.props.profile.details.username} component={EditProfile}/>
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

  export default connect(mapStateToProps)(EditPrivateRoute)