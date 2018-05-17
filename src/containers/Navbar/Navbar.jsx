import React from "react"
import { Navbar as Nav } from "react-bootstrap"
import NavLinks from "./NavLinks"
import Dropdown from "./Dropdown/NavDropdown"
import Logo from "../../components/Navbar/Logo"

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