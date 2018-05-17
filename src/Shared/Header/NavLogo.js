import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const NavLogo = () => (
        <Navbar.Header>
          <Navbar.Brand>
            <Link to = "/">MAYOAUTH</Link>
          </Navbar.Brand>
          {/* <Navbar.Toggle /> */}
        </Navbar.Header>
)

export default NavLogo
