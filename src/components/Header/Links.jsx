import React from 'react'
import { NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Links = (props) => (
    <Nav>
        {
            props.navLinks.map((link, index) => (
                <LinkContainer exact to={`/${link}`} key={index}>
                    <NavItem eventKey={1}>{link}</NavItem>
                </LinkContainer>
            ))
        }
    </Nav>
)

export default Links