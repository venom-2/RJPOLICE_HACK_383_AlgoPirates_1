import React from "react";
import Header from "./Header";
import Sidebar from "./UserSidebar";
import { useState } from "react";
import "./User.css";
import jaipur from "../assets/jaipur.jpg";
import udaipur from "../assets/udaipur.jpg";
import jaisalmer from "../assets/jaisalmer.jpg";

const Appointment = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />

      <div className="outer-container">
      
      <div className="inner-container">

        <div className="card" style={{backgroundColor: '#ff6600'}}>
          <img src={jaipur} className="card-img-top " alt="image" />
          <div className="card-body">
            <p className="card-text">

              Jaipur Police Station

            </p>
          </div>
        </div>

        <div className="card" style={{backgroundColor: 'white'}}>
          <img src={udaipur} className="card-img-top" alt="image" />
          <div className="card-body">
            <p className="card-text text-dark">
              Udaipur Police Station
            </p>
          </div>
        </div>

        <div className="card" style={{backgroundColor: '#046434'}}>
          <img src={jaisalmer} className="card-img-top" alt="image" />
          <div className="card-body">
            <p className="card-text">
              Jaisalmer Police Station
            </p>
          </div>
        </div>
      </div>

      <div className="inner-container">
        <div className="card" style={{backgroundColor: '#ff6600'}}>
          <img src={jaipur} className="card-img-top" alt="image" />
          <div className="card-body">
            <p className="card-text">
              Jodhpur Police Station
            </p>
          </div>
        </div>

        <div className="card" style={{backgroundColor: 'white'}}>
          <img src={jaipur} className="card-img-top" alt="image" />
          <div className="card-body">
            <p className="card-text" style={{color: 'black'}}>
            Gangapur Police Station
            </p>
          </div>
        </div>

        <div className="card" style={{backgroundColor: '#046434'}}>
          <img src={jaipur} className="card-img-top" alt="image" />
          <div className="card-body">
            <p className="card-text">
              Kota Police Station
            </p>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
};

export default Appointment;
