import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { myContext } from "../../../../App";
import auth from "../../../../firebase.init";
import logo2 from "../../../../images/images/logo2.png";

const Header = () => {
  const [user] = useAuthState(auth)
  const [cart]  = useContext(myContext)
console.log(cart);
  const logOut  = () => {
    signOut(auth)
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="white">
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img width={100} src={logo2} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
             
            <Nav.Link variant="dark">
                cart
            <Badge bg="secondary" >{cart.length}</Badge>
            </Nav.Link>
           {user ? <button onClick={logOut} className="btn bg-success">Sign Out</button>:
             <Nav.Link variant="dark" className="fst-bolder" as={Link} to="/Login">
             Login
           </Nav.Link>
           }
            <Nav.Link variant="dark" as={Link} to="/Signup">
              SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
