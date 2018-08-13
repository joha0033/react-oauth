import React, { Component } from 'react'
import { MenuItem, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import { modalActions } from "../Modals/Modal.actions"
import { profileActions } from '../../Profile/Profile.actions';
// UTILIZED CREDENTIALS ACTIONS

class Dropdown extends Component{


    render() {

      const adminLink = () => {
        
        return (
          <LinkContainer activeClassName='' to={`/profile/${username}`}>
                    {(<MenuItem >{
                      'Admin'
                      }</MenuItem>)}
                  </LinkContainer>
                
        )
      }
      let username = sessionStorage.getItem('username') || this.props.credentials.username

      return (
        
        <Nav pullRight>
          {
            this.props.credentials.loggedIn === true ?


              <NavDropdown eventKey={3} title={ username} id="basic-nav-dropdown">

                  <LinkContainer activeClassName='' to={`/profile/${username}`}>
                    {(<MenuItem >{
                      'YOUR PROFILE'
                      }</MenuItem>)}
                  </LinkContainer>
                  {adminLink()}
                  <MenuItem divider />

                  <MenuItem
                    eventKey={3.2}
                    onClick={() => {
                      this.props.logout()
                      this.props.destroyProfile(true)
                      }}>
                    a signout.
                  </MenuItem>

              </NavDropdown>

              :

              <NavDropdown eventKey={3} title="you can..." id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1} onClick={this.props.showSigninModal}>Signin (existing users)</MenuItem>
                  {/* <MenuItem eventKey={3.1} onClick={() => this.props.showCredentialsModal('signin')}>Signin (TEST)</MenuItem> */}
                  <MenuItem eventKey={3.2} onClick={this.props.showRegisterModal}>Register (new users)</MenuItem>
                  {/* <MenuItem eventKey={3.2} onClick={() => {this.props.showCredentialsModal('register')}}>Register (TEST)</MenuItem> */}
              </NavDropdown>

          }

          </Nav>


      )
  }
}

const mapStateToProps = (state) => {
  const { profile, credentials } = state
  return {
    credentials,
    profile
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // showCredentialsModal: (type) => {
    //   dispatch(modalActions.showCredentialsModal(type))
    // },
    showSigninModal: () => {
      dispatch(modalActions.showSigninModal())
    },
    showRegisterModal: () => {
      dispatch(modalActions.showRegisterModal())
    },
    hideModal: () => {
      dispatch(modalActions.hideModal())
    },
    logout: () => {
      dispatch(modalActions.logout())
    },
    destroyProfile: (payload) => {
      dispatch(profileActions.destroyProfile(payload))
    }
  }
};



export default (connect(mapStateToProps, mapDispatchToProps)(Dropdown))