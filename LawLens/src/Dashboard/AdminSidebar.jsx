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

function AdminSidebar({ openSidebarToggle, OpenSidebar, name }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive position-fixed" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand heading">{name}'s Dashboard</div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list text-dark">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <li className="sidebar-list-item">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </li>
        </Link>
        <Link to="/AddAdmin" style={{ textDecoration: "none" }}>
          <li className="sidebar-list-item">
            <BsPeopleFill className="icon" /> Manage logo
          </li>
        </Link>
        <Link to="/fir" style={{ textDecoration: "none" }}>
          <li className="sidebar-list-item">
            <BsFillGrid3X3GapFill className="icon" /> Active FIR
          </li>
        </Link>

        {/* <li className='sidebar-list-item'>
                    <BsPeopleFill className='icon'/> Customers
            </li> */}
        <li className="sidebar-list-item">
          <BsFillGearFill className="icon" /> Setting
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

export default AdminSidebar;
