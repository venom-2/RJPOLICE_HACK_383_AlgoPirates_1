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

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand heading">
          <img src={logo} alt="logo" />
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <Link to="/superadmindashboard" style={{ textDecoration: "none" }}>
          <li className="sidebar-list-item">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </li>
        </Link>
        <Link to="/AddAdmin">
        <li className="sidebar-list-item">
          <BsPeopleFill className="icon" /> Manage Admins
        </li>
        </Link>
        <Link to="/fir">

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
    </aside>
  );
}

export default Sidebar;
