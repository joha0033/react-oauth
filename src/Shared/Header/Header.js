import React, { Component } from 'react';
import { Navbar, Modal } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

import Dropdown from './Dropdown'
import NavList from './NavList'
import NavLogo from './NavLogo'
import Signup from '../../Signup/Signup'

bootstrapUtils.addStyle(Navbar, 'custom2');

class Header extends Component{
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.newUserToggle= this.newUserToggle.bind(this);

    this.state = {
      showModal: false
    };
  }

   handleClose() {
    
     this.setState({ showModal: false });
   }

   handleShow(userStatus) {
     this.newUserToggle(userStatus)
     this.setState({ showModal: true });
   }

   newUserToggle(status) {
    
     status ?
     this.setState({newUser: true})
     :
     this.setState({newUser: false})
   }


  render() {

    var styles = { "borderRadius" : '0' };

    return (

    <div>
      <Navbar inverse collapseOnSelect style={styles}>

        <NavLogo />

        <Navbar.Collapse>
          <NavList />

          <Dropdown
            toggleShow={this.handleShow}
            signoutFromHeader = {this.props.signoutFromApp}
            tokenCheckFromHeader = {this.props.tokenChangeFromApp} />
        </Navbar.Collapse>

      </Navbar>

      <Modal show={this.state.showModal} onHide={this.handleClose}>

        <Modal.Header closeButton>

           {this.state.newUser ?
             <Modal.Title>Signup</Modal.Title>
             :
             <Modal.Title>Signin</Modal.Title>
           }

         </Modal.Header>

         <Modal.Body>

           <Signup
             hideModal = {this.handleClose}
             signinValid = {this.props.signin}
             newUserToggleFromHeader = {this.newUserToggle}
             newUserFromHeader = {this.state.newUser}
           />

         </Modal.Body>

      </Modal>
    </div>
  )
  }
}

export default Header
