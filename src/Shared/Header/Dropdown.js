import React, { Component } from 'react'
import { MenuItem, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Route, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import { userActions } from "../../actions/userActions"

class Dropdown extends Component{


    render() {

      return (
        
        <Nav pullRight>
        {console.log(this.props.user)}
          {
            // !!sessionStorage.getItem('token') ?
            this.props.user.loggedIn === true ?


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
                <MenuItem eventKey={3.1} onClick={()=>this.props.toggleShow(false)}>Signin (existing users)</MenuItem>
              </Route>
                <MenuItem eventKey={3.2} onClick={()=>this.props.toggleShow(true)}>Register (new users)</MenuItem>
              </NavDropdown>

          }

          </Nav>


      )
  }
}

const mapStateToProps = (state) => {
  const { user } = state
  return {
    user
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    login: () => {
      dispatch(userActions.login())
    },
    logout: () => {
      dispatch(userActions.logout())
    }
  }
};



export default (connect(mapStateToProps, mapDispatchToProps)(Dropdown))