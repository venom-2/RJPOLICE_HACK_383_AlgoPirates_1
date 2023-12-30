import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import "./App.css";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

function Header({ OpenSidebar }) {
  const style={width: '35px', height: '35px' };
  return (
    <div className="header-dashboard">
      <div>
        <div className="menu-icon">
          <BsJustify className="icon" onClick={OpenSidebar} />
        </div>
        <div className="header-left">
          {/* <BsSearch className="icon-top" /> */}
        </div>
      </div>
      <div className="header-right">
        {/* <BsFillBellFill className="icon-top" />
        <BsFillEnvelopeFill className="icon-top" />
        <BsPersonCircle className="icon-top" /> */}
        <Link to="/signin">
          <IoIosLogOut style={style}/>
        </Link>
      </div>
    </div>
  );
}

export default Header;
