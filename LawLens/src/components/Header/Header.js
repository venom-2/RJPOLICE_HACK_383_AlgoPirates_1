import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
// import loginSignup from "../../components/Login/LoginSignup";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar">
      <Container>
        <Link className="link" to="/">
          <h2>LawLens</h2>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link to="/" className="link">
              User Sign Up
            </Link>
            <Link className="link" eventKey={2} to="/">
              Sign In
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
