import React from "react"
import { Navbar } from "react-bootstrap"
import NavLinks from "../../containers/Navbar/NavLinks"
import Dropdown from "../../containers/Navbar/NavDropdown"
import Logo from "./Logo"
// import {Navbar} from './Header.styles'
const Header = (props) => (
    
        <Navbar inverse fixedTop collapseOnSelect>
        {/* <Navbar> */}
            <div className="container">
                <ul>
                    <Logo /> 
                    {/* <ul> LOGO
                            <a> 
                        </ul> */}

                    <NavLinks /> 
                    {/* <ul> NAVLINKS
                            <li>
                                <a> 
                            </li>  
                            <li>
                                <a>
                            </li>   
                        </ul> */}

                    <Dropdown /> 
                    {/* <ul> CONTAINER
                            <li>
                                <a/> DISPLAY LINK
                                <ul> DROPDOWN LINKS
                                    <li>
                                        <a/>
                                    </li>
                                    <li>
                                        <a/>
                                    </li>
                                </ul> 
                            </li>
                        </ul> */}

                </ul>
            </div> 
        </Navbar> 
        // </Navbar>
    
)

export default Header