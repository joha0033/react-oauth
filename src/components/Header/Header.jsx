import React from "react"
import { Navbar as Nav } from "react-bootstrap"
import NavLinks from "../../containers/Navbar/NavLinks"
import Dropdown from "../../containers/Navbar/NavDropdown"
import Logo from "./Logo"

const Navbar = (props) => (
    <div>
        <Nav inverse fixedTop fluid collapseOnSelect>
            <div className="container">
                <Logo />
                <NavLinks />
                <Dropdown />
            </div> 
        </Nav>
    </div>
)

export default Navbar