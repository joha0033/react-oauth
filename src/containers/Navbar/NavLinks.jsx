import React, {Component} from 'react'
import Links from "../../components/Navbar/Links.jsx"

class NavLinks extends Component {

    render(){

        return(
            <div>
                <Links 
                    navLinks = {["Home", "About"]} //from store?
                />
            </div>
            
        )

    }
}

export default NavLinks