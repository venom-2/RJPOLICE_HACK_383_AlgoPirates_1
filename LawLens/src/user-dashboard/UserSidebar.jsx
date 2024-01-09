import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function UserSidebar({ openSidebarToggle, OpenSidebar, name }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">{name}'s Dashboard</div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <Link to="/userdashboard" style={{ textDecoration: "none" }}>
          <li className="sidebar-list-item">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </li>
        </Link>
        <Link to="/Appointment" style={{ textDecoration: "none" }}>
          <li className="sidebar-list-item">
            <BsPeopleFill className="icon" /> Book Your Appointment
          </li>
        </Link>
        <Link to="/Myfir" style={{ textDecoration: "none" }}>
          <li className="sidebar-list-item">
            <BsFillGrid3X3GapFill className="icon" /> Track Your FIR
          </li>
        </Link>

        {/* <li className='sidebar-list-item'>
                    <BsPeopleFill className='icon'/> Customers
            </li> */}
        <li className="sidebar-list-item">
          <BsFillGearFill className="icon" /> Settings
        </li>
      </ul>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </aside>
  );
}

export default UserSidebar;
