import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Logo = (props) => (
    <Nav>
        <Navbar.Brand>
            <Link to = "/">MAYOAUTH</Link>  
        </Navbar.Brand>
    </Nav>
)

export default Logo