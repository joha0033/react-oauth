import React, { Component } from 'react'
import { MenuItem, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import { modalActions } from "../Modals/Modal.actions"
import { profileActions } from '../../Profile/Profile.actions';
// UTILIZED CREDENTIALS ACTIONS

class Dropdown extends Component{


    render() {
      let username = sessionStorage.getItem('username')
      return (
        
        <Nav pullRight>
          {
            this.props.isLoggedIn === true ?


              <NavDropdown eventKey={3} title="Welcome" id="basic-nav-dropdown">

                  <LinkContainer activeClassName='' to={`/profile/${username}`}>
                    {(<MenuItem >{
                      !!username
                      ? username // FIX
                      : 'Profile'
                      }</MenuItem>)}
                  </LinkContainer>
                <MenuItem divider />

                  <MenuItem
                    eventKey={3.2}
                    onClick={() => {
                      this.props.logout()
                      this.props.destroyProfile(true)
                      }}>
                    Signout
                  </MenuItem>

              </NavDropdown>

              :

              <NavDropdown eventKey={3} title="you can..." id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1} onClick={this.props.showSigninModal}>Signin (existing users)</MenuItem>
                  <MenuItem eventKey={3.2} onClick={this.props.showRegisterModal}>Register (new users)</MenuItem>
              </NavDropdown>

          }

          </Nav>


      )
  }
}

const mapStateToProps = (state) => {
  const { loggedIn } = state.credentials
  const { profile } = state
  return {
    isLoggedIn: loggedIn,
    profile
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
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