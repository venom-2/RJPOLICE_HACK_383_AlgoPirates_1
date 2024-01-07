import React from "react";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
// import loginSignup from "../../components/Login/LoginSignup";
import logo from "../../assets/Law Lens-logos_blac.png";

const linkStyle = {
  textDecoration: "none",
  color: 'black',
};

export default function Header() {
  // const history = useHistory();
  // const loginPerJa = (e) => {
  //   e.preventDefault();
  //   history.push("./login");
  // }
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar">
      <Container>
        <Link className="link" to="/">
          <img src={logo} alt="none"/>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link to="/signup"  className="link" style={linkStyle}>
              Sign Up
            </Link>
            <Link className="link" eventKey={2} to="/signin" style={linkStyle}>
              Sign In
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
