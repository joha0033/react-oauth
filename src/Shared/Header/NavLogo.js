import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class NavLogo extends Component{

    render() {

      return (

        <Navbar.Header>
          <Navbar.Brand>
            <Link to = "/">MAYOAUTH</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

      )

  }
}
export default NavLogo
