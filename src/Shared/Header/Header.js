import React, { Component } from 'react';
import { Navbar, MenuItem, NavItem, Nav, NavDropdown, Modal } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import Signup from '../../Signup/Signup'

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

  componentWillMount(){

  }
   handleClose() {

     this.setState({ show: false });

   }

   handleShow() {
     
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
              <MenuItem eventKey={3.3} onClick={this.props.signoutHeader}>Signout</MenuItem>
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
             signinValid={this.props.signin}
           />
         </Modal.Body>
      </Modal>
    </div>
  )
  }
}

export default Header
