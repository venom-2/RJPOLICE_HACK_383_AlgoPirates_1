import React, { useState } from "react";
import "./LoginSignup.css";
import user from "../../assets/user.png"
import mail from "../../assets/mail.png"
import padlock from "../../assets/padlock.png"
import number from "../../assets/number.png"
import dial from "../../assets/dial.png"
import Header from "../Header/Header"


export default function LoginSignup () {

  const [cred,setCred] = useState({username : "",email : "", password : "", adharno : "", mobileno : ""})

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:3001/api/auth/createuser", {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({
          username: cred.username,
          email: cred.email,
          password: cred.password,
          adharno: cred.adharno,
          mobileno: cred.mobileno
        })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
      console.log("completed");
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  const onchange = (e)=> {
    setCred({...cred,[e.target.name] : e.target.value})
  }

  const [action,setAction]=useState("Sign Up");
  return (
    <div className='container'>
      <Header/>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Log In"?<div></div>:<div className="input">
          <img src={user} alt="" />
          <input type="text" name="username"  value={cred.username}  onChange={onchange} placeholder='User Name' />
        </div>}
        <div className="input">
          <img src={mail} alt="" />
          <input type="email" name="email"  value={cred.email} onChange={onchange} placeholder='Email'/>
        </div>
        <div className="input">
          <img src={padlock} alt="" />
          <input type="password" name="password"  value={cred.password} onChange={onchange} placeholder='Password'/>
        </div>
        {action==="Log In"?<div></div>:<div className="input">
          <img src={number} alt="" />
          <input type="tel" name="adharno" value={cred.adharno} onChange={onchange} placeholder='Aadhar Number'/>
        </div>}
        {action==="Log In"?<div></div>:<div className="input">
          <img src={dial} alt="" />
          <input type="tel" name="mobileno" id="" value={cred.mobileno} onChange={onchange} placeholder='Mobile Number'/>
        </div>}
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
      <div className="submit-container">
        <div className={action==="Sign Up"?"submit gray":"submit"}   onClick={handleSubmit}>Sign Up</div>
      </div>
    </div>
  );
}