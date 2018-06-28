import React from "react"
import { Navbar } from "react-bootstrap"
import NavLinks from "../../containers/Navbar/NavLinks"
import Dropdown from "../../containers/Navbar/NavDropdown"
import Logo from "./Logo"

const Header = (props) => (
    
        <Navbar inverse fixedTop collapseOnSelect>
            <div className="container">
                <Logo />
                <NavLinks />
                <Dropdown />
            </div> 
        </Navbar>
    
)

export default Header