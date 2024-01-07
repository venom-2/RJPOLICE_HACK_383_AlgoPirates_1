import React, { useState } from "react";
import "./GetStarted.css";
import getStarted from "../../assets/getStarted.png";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import man from "../../assets/curly-hair-man.png";
import intro from "../../assets/intro.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const linkStyle2 = {
  textDecoration: "underline",
  color: 'black',
};

function FirformModal(props) {

  const [cred, setCred] = useState({
    firstname: "",
    lastname: "",
    city: "",
    state: "",
    adharno: "",
    description: "",
  })

  const onchange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/fir/create', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstname: cred.firstname,
          lastname: cred.lastname,
          city: cred.city,
          state: cred.state,
          adharno: cred.adharno,
          description: cred.description 
        })
      })
      const res = await response.json();
      console.log(res);
      props.onHide();
    } catch (error) {
      console.error('Error during fetch:', error);
    }

  }


  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">FILE YOUR COMPLAINT!!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='form'>
          <form>
            <div className='form-group'>
              <div>Date of Complaint:</div>
              <input type="date" className="form-control" id="date" name="date" />
            </div>
            <div className='form-group'>
              <div>Name of Complainant:</div>
              <div className="loc">
                <input type="text" className="form-control" id="name" name="firstname" value={cred.firstname} onChange={onchange} placeholder='First Name' />
                <input type="text" className="form-control" id="name" value={cred.lastname} onChange={onchange} name="lastname" placeholder='Last Name' />
              </div>
            </div>
            <div className='form-group'>
              <div>Location:</div>
              <div className="loc">
                <input type="text" className="form-control" id="name" value={cred.city} name="city" onChange={onchange} placeholder='City' />
                <input type="text" className="form-control" id="name" value={cred.state} name="state" onChange={onchange} placeholder='State' />
              </div>
            </div>
            <div className='form-group'>
              <div>Aadhar Number:</div>
              <input type="tel" className="form-control" value={cred.adharno} onChange={onchange} id="aadharno" name="adharno" placeholder="Enter valid 12-digit Aadhar Number" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea4">Write your Complaint:</label>
              <textarea class="form-control" onChange={onchange} value={cred.description} name="description" id="exampleFormControlTextarea4" rows="3"></textarea>
            </div>
            <div>Upload your File:</div>
            <div className="input-group mb-3">
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  id="inputGroupFile02"
                  onChange={(e) => {
                    const fileName = e.target.files[0].name;
                    const label = document.querySelector(".custom-file-label");
                    label.textContent = fileName;
                  }}
                />
                <label
                  class="custom-file-label"
                  for="inputGroupFile02"
                  aria-describedby="inputGroupFileAddon02"
                >
                  Click a photo of the incident and upload
                </label>
              </div>
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleSubmit} className="btn-warning">
          Submit
        </Button>
        {/* Add additional buttons/actions here if needed */}
      </Modal.Footer>
    </Modal>
  );
}

export default function GetStarted() {

  const [modalShow, setModalShow] = useState(false);
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
      <Container className="containers">
        <div className="allText">
          <h1
            className="title"
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="10"
            data-aos-duration="370"
          >
            Tell us your Problem
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
          <button
            className="getStartedBtn"
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="20"
            data-aos-duration="1000"
            easing="ease-in"
            onClick={() => setModalShow(true)}
          >
            <strong>Urgent Complaint!!</strong>
          </button>
          <FirformModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <div className="note">Note: To file an FIR online: <Link to="/signup" style={linkStyle2}>Click Here</Link></div>
        </div>
        <div className="image">
          <img src={man} alt="none" className="man" />
          <div className="intro"><img src={intro} alt="none" /></div>
        </div>
      </Container>
    </section>
  );
}
