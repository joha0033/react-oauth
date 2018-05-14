import React, { Component } from 'react';
import { Nav, Navbar, Modal, Alert } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import { withRouter } from 'react-router-dom';
import {connect} from "react-redux"
import Dropdown from './Dropdown'
import NavList from './NavList'
import NavLogo from './NavLogo'
import Signup from '../../UserCredentials/Signup/SignupNEW'

// import Signin from '../../Register/Signin/Signin'

bootstrapUtils.addStyle(Nav, 'custom');

class Header extends Component{
  constructor(props, context) {
    super(props, context);

    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleShowAlert = this.handleShowAlert.bind(this);
    this.handleDismissAlert = this.handleDismissAlert.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.newUserToggle= this.newUserToggle.bind(this);
    this.state = {
      showModal: false,

      showAlert: false,

      errorMsg: 'error'
    };
  }

  handleDismissAlert() {
    this.newUserToggle(false)
    this.setState({ showAlert: false });
   }

  handleShowAlert(error) {
    console.log(error);
    
    this.setState({ showAlert: true });
    error.toString() === 'Error: 403'
    ? this.setState({errorMsg: 'That email is already taken. Try Signing.'})
    : this.setState({errorMsg: 'error'})
  }



   handleCloseModal() {
     console.log(this.props.authFromApp);
     this.setState({ showModal: false });
   }

   handleShowModal(userStatus) {
     this.newUserToggle(userStatus)
     this.setState({ showModal: true });
   }

   newUserToggle(status) {
     status
     ? this.setState({newUser: true})
     : this.setState({newUser: false})

   }


  render() {

    return (



    <div>
      <style type="text/css">{`
        .navbar {
              opacity: .85;
        }
        `}</style>


      <Navbar inverse fixedTop fluid collapseOnSelect>
        <div className="container">

          <NavLogo />

          <Navbar.Collapse>
            <NavList />
      
            <Dropdown
              toggleShow={this.handleShowModal}
               />
         

          </Navbar.Collapse>
        </div>

      </Navbar>


      <Modal show={this.state.showModal} onHide={this.handleCloseModal}>

        <Modal.Header closeButton>

           {this.state.newUser ?
             <Modal.Title>Signup</Modal.Title>
             :
             <Modal.Title>Signin</Modal.Title>
           }

         </Modal.Header>

         <Modal.Body>

          { this.state.showAlert ?

            <Alert bsStyle="danger" onDismiss={this.handleDismissAlert}>
                {this.state.errorMsg}
            </Alert>
            :
            null
          }

          
              <Signup
              showAlertFromHeader={this.handleShowAlert}
              hideModal = {this.handleCloseModal}
              newUserToggleFromHeader = {this.newUserToggle}
              newUserFromHeader = {this.state.newUser}
            />
          
            
           

         </Modal.Body>

      </Modal>
    </div>
  )
  }
}

const mapStateToProps = (state) => {
  const { loggedIn } = state.user
  return {
    loggedIn
  }
}

export default (connect(mapStateToProps)(Header))
