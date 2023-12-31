import React from "react";
import { Container } from "react-bootstrap";
import "./Team.css";

export default function Team() {
  return (
    <article id="team">
      <Container className="container">
        <div className="content">
          <h1 className="title"></h1>
          <div className="teamGrid">
            <div xs={4} className="member">
              
              <h3 className="memberInfo">
                
                <br />
                
                <br />
                
              </h3>
            </div>
            <div
              className="member"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <h3 className="memberInfo">
                
                <br />
                <br />
              </h3>
            </div>
            <div className="member">
              
              
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
