import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Logo = (props) => (
    <Navbar.Header>
        <Nav>
            <Navbar.Brand>
                <Link to = "/">MAYOAUTH</Link>  
            </Navbar.Brand>
        </Nav>
    </Navbar.Header>
    
)

export default Logo