import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Offcanvas, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';


const Navigation = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">

        <Container>
          <Navbar.Brand as={Link} to="/" >My React Application</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" >Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/">Action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="https://github.com/ElliotRhysAl/reactFullStack" target='_blank'>
                  GitHub Repo
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto" placement="end">
            <Button variant="outline-light" onClick={handleShow}>
              Account
            </Button>
          </Nav>
            </Navbar.Collapse>

        
        <Offcanvas show={show} onHide={handleClose} placement="end">

        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Account</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#settings">Settings</Nav.Link>
            <Nav.Link href="#logout">Logout</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      </Container>
      </Navbar>
      
    </>
  );
};

export default Navigation;