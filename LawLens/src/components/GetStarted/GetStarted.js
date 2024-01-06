import React from "react";
import "./GetStarted.css";
import getStarted from "../../assets/getStarted.png";
import { Container } from "react-bootstrap";
import {Link} from "react-router-dom";
import thinkman from "../../assets/thinkman.png";

export default function GetStarted() {
  return (
    <section id="getStarted">
      <img
        src={getStarted}
        alt="none"
        className="startedImg"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-delay="10"
        data-aos-duration="370"
        easing="ease-in-cubic"
      />
      <Container className="container">
        <div className="allText">
          <h1
            className="title"
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="10"
            data-aos-duration="370"
          >
            Tell us your problem
          </h1>
          <p
            className="info"
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="10"
            data-aos-duration="370"
          >
            Introducing our revolutionary Online FIR Facility, a seamless solution that transforms the way you report incidents and access law enforcement services.
          </p>
          <div className="feedback">
          <p className="iinfo">
            Give us a Feedback on...<br/>
            <a href="#" target="_blank">Insta</a>
            <br/>
            <a href="#" target="_blank">Fb</a>
          </p>
          <img src={thinkman} class="rounded float-right" id="image" alt="image" />
          </div>
          <button
            className="getStartedBtn"
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="20"
            data-aos-duration="1000"
            easing="ease-in"
          >
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <strong>Get Started</strong>
            </Link>
          </button>
        </div>
      </Container>
    </section>
  );
}
