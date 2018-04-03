import React, { Component } from 'react'
import { MenuItem, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Dropdown extends Component{
  constructor(props){

    super(props)

    this.state= {

    }

  }

    render() {
      return (
        
        <Nav pullRight>

          {
            this.props.tokenCheckFromHeader ?



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
                    onClick={this.props.signoutFromHeader}>
                    Signout
                  </MenuItem>

              </NavDropdown>

              :

              <NavDropdown eventKey={3} title="you can..." id="basic-nav-dropdown">
                <MenuItem eventKey={3.1} onClick={()=>this.props.toggleShow(false)}>Signin</MenuItem>
                <MenuItem eventKey={3.2} onClick={()=>this.props.toggleShow(true)}>Signup</MenuItem>
              </NavDropdown>

          }

          </Nav>

      )




  }
}
export default Dropdown
