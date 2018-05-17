import React from 'react'
import { NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavList = () => (
        <Nav>
          <LinkContainer exact to="/home">
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/about">
            <NavItem eventKey={2}>About</NavItem>
          </LinkContainer>
        </Nav>
      )

export default NavList
