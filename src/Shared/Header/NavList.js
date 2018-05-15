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

          <LinkContainer exact to="/">
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/about">
            <NavItem eventKey={2}>About</NavItem>
          </LinkContainer>
        </Nav>
      )




  }
}
export default NavList
