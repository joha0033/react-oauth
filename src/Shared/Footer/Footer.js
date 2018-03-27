import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

bootstrapUtils.addStyle(Navbar, 'custom');

class Footer extends Component{

  render() {

    var styles = {
                "marginBottom" : '0',
                'borderRadius' : '0'
            };

    return (
      <div >
        <Navbar inverse style={styles} >
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">OAUTHed and thank you....</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
      </div>

    )
  }
}

export default Footer
