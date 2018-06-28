import React, { Component } from 'react'
import { MenuItem, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import { modalActions } from "../Modals/Modal.actions"
// UTILIZED CREDENTIALS ACTIONS

class Dropdown extends Component{


    render() {
      return (
        
        <Nav pullRight>
          {
            this.props.isLoggedIn === true ?


              <NavDropdown eventKey={3} title="Welcome" id="basic-nav-dropdown">

                  {/* <LinkContainer activeClassName='' to="/profile">
                    <MenuItem >Signed in as <br/>{console.log(this.props.profile.loading)}</MenuItem>
                  </LinkContainer> */}

                  <LinkContainer activeClassName='' to="/profile">
                    { 
                      (<MenuItem >{
                      !this.props.profile.loading
                      ?this.props.profile.details.email
                      :sessionStorage.getItem('email')
                      }</MenuItem>)}
                  </LinkContainer>

                  {/* <LinkContainer activeClassName='' to="/profile">
                    <MenuItem >Profile</MenuItem>
                  </LinkContainer> */}

                <MenuItem divider />

                  <MenuItem
                    eventKey={3.2}
                    onClick={this.props.logout}>
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
    }
  }
};



export default (connect(mapStateToProps, mapDispatchToProps)(Dropdown))