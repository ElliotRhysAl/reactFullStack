import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Offcanvas, Button } from "react-bootstrap";
import { useAuth } from './AuthContext.jsx'
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Get auth state and modal controls from context
  const { user, setShowLogin, setShowSignup, setShowLogout } = useAuth();

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
                <NavDropdown.Item as={Link} to="/">Another action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="https://github.com/ElliotRhysAl/reactFullStack" target='_blank'>
                  GitHub Repo
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
              <Button variant="outline-primary" onClick={handleShow}>
                Account
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Account</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {user ? (
            <>
              <div className="mb-3">
                <strong>Welcome, {user.email}!</strong>
              </div>
              <Nav className="flex-column">
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
              </Nav>
              <Button
                variant="outline-danger"
                className="mt-4 w-100"
                onClick={() => {
                  setShowLogout(true);
                  handleClose();
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                onClick={() => {
                  setShowLogin(true);
                  handleClose();
                }}
              >
                Login
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  setShowSignup(true);
                  handleClose();
                }}
              >
                Sign Up
              </Button>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

// Wrap your app or router with AuthProvider at a higher level, e.g. in App.js
export default function Navigation() {
  return(
      <NavigationBar />
  );
}
