import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../context/UseAuth';
// import useFireBase from '../../hooks/useFirebase/UsefireBase';

const Header = () => {
    const {user , logOut} = useAuth();
    return (
        <div>
            <>
            <Navbar bg="dark" variant="dark" fixed='top' >
    <Container>
    <Navbar.Brand href="#home">Car-Expert</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
    <Nav >

      <Nav.Link as={HashLink}   to="/home#home">Home</Nav.Link>
      <Nav.Link as={Link} to="/addservice"> addService</Nav.Link>
      <Nav.Link as={Link} to="/manageService"> ManageService</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/home#exparts">Exparts</Nav.Link>
      {
          user.email ?
          <div>
             
              <button onClick={logOut} className="btn-danger my-2 me-2">LogOut</button>
              <img src={user.photoURL}  style={{borderRadius:"50%" , width:"50px"}} alt="" />
              {/* <span className="text-white ms-2">{user.displayName}</span> */}
          </div>:
            <Nav.Link as={Link} to="/login">Log-In</Nav.Link>
      }
      
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
            </>
        </div>
    );
};

export default Header;