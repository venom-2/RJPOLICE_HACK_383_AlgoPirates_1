import React, { useState } from "react";
import "./LoginSignup.css";

export default function LoginSignup () {

  const [action,setAction]=useState("Sign Up");
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Log In"?<div></div>:<div className="input">
          <img src="../Assets/user.png" alt="" />
          <input type="text" name="" id="" placeholder='User Name' />
        </div>}
        <div className="input">
          <img src="../Assets/mail.png" alt="" />
          <input type="email" name="" id="" placeholder='Email'/>
        </div>
        <div className="input">
          <img src="../Assets/padlock.png" alt="" />
          <input type="password" name="" id="" placeholder='Password'/>
        </div>
        {action==="Log In"?<div></div>:<div className="input">
          <img src="../Assets/number.png" alt="" />
          <input type="tel" name="" id="" placeholder='Aadhar Number'/>
        </div>}
        {action==="Log In"?<div></div>:<div className="input">
          <img src="../Assets/dial.png" alt="" />
          <input type="tel" name="" id="" placeholder='Mobile Number'/>
        </div>}
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
      <div className="submit-container">
        <div className={action==="Log In"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Log In")}}>Log In</div>
      </div>
    </div>
  );
}