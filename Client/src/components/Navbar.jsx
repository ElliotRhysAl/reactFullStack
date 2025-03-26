import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const Navigation = () => {
  
  return (
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
          
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
};

export default Navigation;