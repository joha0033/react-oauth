import React, {Component} from 'react'
import Links from "../../components/Header/Links.jsx"
import { navLinks } from "../../_Helpers/NavLinkData"

class NavLinks extends Component {

    render(){

        return(
            <div>
                <Links 
                    navLinks = {navLinks} 
                />
            </div>
            
        )

    }
}

export default NavLinks