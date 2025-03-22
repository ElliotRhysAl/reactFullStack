// import { Link } from "react-router-dom";

// // const Navbar = () => {
// //   return (
// //     <nav className="bg-gray-800 p-4 text-white">
// //       <ul className="flex space-x-4">
// //         <li><Link to="/">Home</Link></li>
// //         <li><Link to="/about">About</Link></li>
// //       </ul>
// //     </nav>
// //   );
// // };






import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/" >Home</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/about">About</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Navigation;