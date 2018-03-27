import React, { Component } from 'react';
import { Navbar, MenuItem, NavItem, Nav, NavDropdown, Modal } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import Signup from '../../Login/Signup/Signup'

bootstrapUtils.addStyle(Navbar, 'custom2');

class Header extends Component{
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

   handleClose() {
     console.log('this.props.signin hit?');

     console.log('handledHide!');
     this.setState({ show: false });
     return this.props.signin()
   }

   handleShow() {
     console.log('handledShow!');
     this.setState({ show: true });
   }

  render() {
    var styles = {
                "borderRadius" : '0'
            };

    return (

    <div>
      <Navbar inverse collapseOnSelect style={styles}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">My OAUTH</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/home">
              Home
            </NavItem>
            <NavItem eventKey={2} href="/about">
              About
            </NavItem>

          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={3} title="you can..." id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} onClick={this.handleShow}>Signin</MenuItem>
              <MenuItem eventKey={3.2} onClick={this.handleShow}>Signup</MenuItem>
              {/* DISPLAY WHEN USER SIGNED IN */}
              <MenuItem divider />
              <MenuItem eventKey={3.3} onClick={this.props.signout}>Signout</MenuItem>
              {/* //////////////////////////////////// */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
           <Modal.Title>Signup</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <Signup
             hideModal={this.handleClose}
           />
         </Modal.Body>
      </Modal>
    </div>
  )
  }
}

export default Header
