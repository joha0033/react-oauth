import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';

const Footer = () => {
  var styles = {
    "marginBottom" : '0', 
    'borderRadius' : '0'
  };

  return (
    <div >
      <Navbar inverse  style={styles}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Thanks you and thank you....</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
    </div>
  )
}

export default Footer
