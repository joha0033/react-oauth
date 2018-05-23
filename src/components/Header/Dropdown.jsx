import React, { Component } from 'react'
import { MenuItem, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Route } from "react-router-dom"
import { connect } from 'react-redux'
import { dropdownActions } from "../../Shared/Header/dropdownActions"

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
              <Route>
                <MenuItem eventKey={3.1} onClick={()=>this.props.toggleShow()}>Signin (existing users)</MenuItem>
              </Route>
                <MenuItem eventKey={3.2} onClick={()=>this.props.toggleShow()}>Register (new users)</MenuItem>
              </NavDropdown>

          }

          </Nav>


      )
  }
}

const mapStateToProps = (state) => {
  const { loggedIn } = state.user
  return {
    isLoggedIn: loggedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(dropdownActions.logout())
    }
  }
};



export default (connect(mapStateToProps, mapDispatchToProps)(Dropdown))