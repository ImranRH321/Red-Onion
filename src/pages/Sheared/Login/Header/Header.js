import React from "react";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo2 from "../../../../images/images/logo2.png";

const Header = () => {
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
            <Badge bg="secondary" >0</Badge>
            </Nav.Link>
            <Nav.Link variant="dark" className="fst-bolder" as={Link} to="/Login">
              Login
            </Nav.Link>
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
