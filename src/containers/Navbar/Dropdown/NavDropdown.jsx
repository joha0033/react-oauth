import React, { Component } from 'react'
import { MenuItem, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import { dropdownActions } from "./NavDropdownActions"


class Dropdown extends Component{


    render() {

      return (
        
        <Nav pullRight>
          {
            this.props.isLoggedIn === true ?


              <NavDropdown eventKey={3} title="Welcome" id="basic-nav-dropdown">


                  <LinkContainer activeClassName='' to="/profile">
                    <MenuItem >Signed in as <br/>___________</MenuItem>
                  </LinkContainer>


                <MenuItem divider />

                  <LinkContainer activeClassName='' to="/profile">
                    <MenuItem >Profile</MenuItem>
                  </LinkContainer>

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
  return {
    isLoggedIn: loggedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    showSigninModal: () => {
      dispatch(dropdownActions.showSigninModal())
    },
    showRegisterModal: () => {
      dispatch(dropdownActions.showRegisterModal())
    },
    hideModal: () => {
      dispatch(dropdownActions.hideModal())
    },
    logout: () => {
      dispatch(dropdownActions.logout())
    }
  }
};



export default (connect(mapStateToProps, mapDispatchToProps)(Dropdown))