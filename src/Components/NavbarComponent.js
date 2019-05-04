import React from 'react';

import { Button, Navbar, Nav } from 'react-bootstrap';


function NavbarComponent() {
  return (
    <div className="NavbarComponent">

        <Navbar bg="primary" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap TODO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              By <a href="https://rafalm.com">Rafał Michałuszek</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        
    </div>
  );
}

export default NavbarComponent;
