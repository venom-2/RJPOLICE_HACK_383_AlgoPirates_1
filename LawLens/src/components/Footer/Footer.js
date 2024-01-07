import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: 'white',
};

export default function Footer() {
  return (
    <footer id="footer">
      <Container className="container">
        <h1
          className="footerTitle"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="10"
          data-aos-duration="320"
        >
          Pending Application?
        </h1>
        <button className="sendEmailBtn">
        <Link to="/signup" style={linkStyle}>
         Track your application here
        </Link>
        </button>
      </Container>
    </footer>
  );
}
