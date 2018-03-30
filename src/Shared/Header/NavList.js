import React, { Component } from 'react'
import { NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NavList extends Component{
  constructor(props){

    super(props)

    this.state= {

    }
  }
    render() {
      return (
        <Nav>

          <LinkContainer to="/home">
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
          {/* <NavItem eventKey={1} href="/home">
            Home
          </NavItem> */}
          <LinkContainer to="/about">
            <NavItem eventKey={2}>About</NavItem>
          </LinkContainer>
          {/* <NavItem eventKey={2} href="/about">
            About
          </NavItem> */}

        </Nav>
      )




  }
}
export default NavList
