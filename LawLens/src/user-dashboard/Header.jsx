import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import "./App.css";

function Header({ OpenSidebar }) {
  return (
    <div className="header-dashboard">
      <div>
        <div className="menu-icon">
          <BsJustify className="icon" onClick={OpenSidebar} />
        </div>
        <div className="header-left">
          <BsSearch className="icon-top" />
        </div>
      </div>
      <div className="header-right">
        <BsFillBellFill className="icon-top" />
        <BsFillEnvelopeFill className="icon-top" />
        <BsPersonCircle className="icon-top" />
      </div>
    </div>
  );
}

export default Header;
