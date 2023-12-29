import React, { useState } from "react";
import "./LoginSignup.css";
import user from "../../assets/user.png";
import mail from "../../assets/mail.png";
import padlock from "../../assets/padlock.png";
import number from "../../assets/number.png";
import dial from "../../assets/dial.png";


export default function LoginSignup () {

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user} alt="" />
          <input type="text" name="" id="" placeholder='User Name' />
        </div>
        <div className="input">
          <img src={mail} alt="" />
          <input type="email" name="" id="" placeholder='Email'/>
        </div>
        <div className="input">
          <img src={padlock} alt="" />
          <input type="password" name="" id="" placeholder='Password'/>
        </div>
        <div className="input">
          <img src={number} alt="" />
          <input type="tel" name="" id="" placeholder='Aadhar Number'/>
        </div>
        <div className="input">
          <img src={dial} alt="" />
          <input type="tel" name="" id="" placeholder='Mobile Number'/>
        </div>
      </div>
      {/* {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>} */}
      <div className="submit-container">
        <div className="submit gray">Sign Up</div>
        {/* <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Log In")}}>Log In</div> */}
      </div>
    </div>
  );
}