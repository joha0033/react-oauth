import React from 'react'
import { NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Links = (props) => (<Nav>
        {
            props.navLinks.map((data, index) => 
                //  return data.outsideLink 
                    // ? (
                    // <a  onClick={} key={index}>
                    //     <NavItem key={index} eventKey={1}>{data.title}</NavItem>
                    // </a>
                    // )
                    // : (
                    <LinkContainer target="_blank" exact to={data.link} key={index}>
                        <NavItem key={index} eventKey={1}>{data.title}</NavItem>
                    </LinkContainer>
                    // )
                
            )
        }
    </Nav>)

    


export default Links