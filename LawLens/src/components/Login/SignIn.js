import React from 'react'
import "./SignIn.css"
import Header from "../Header/Header";
import mail from "../../assets/mail.png";
import padlock from "../../assets/padlock.png";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';

const SignIn = () => {
  const history = useHistory();
  const [cred, setCred] = useState({ email: "", password: "", usertype: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (cred.usertype === 'admin') {
        const response = await fetch("http://localhost:3001/api/auth/login", {
          method: 'POST',
          headers: {
            "Content-Type": 'application/json'
          },
          body: JSON.stringify({
            email: cred.email,
            password: cred.password,
          })
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        history.push('./dashboard');
      } else {
        console.log("nhi ho sakta bhai")

      }


    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  const onchange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value })
  }

  //   
  // 
  // 
  return (
    <div>
      <Header />
      <form>
        <div className='header'>
          <div className="text">LogIn</div>
          <div className="underline"></div>
        </div>
        <div className='inputs'>
          <div className="input">
            <img src={mail} alt="" />
            <input type="email" name="email" value={cred.email} onChange={onchange} placeholder='Email' />
          </div>
          <div className="input">
            <img src={padlock} alt="" />
            <input type="password" name="password" value={cred.password} onChange={onchange} placeholder='Password' />
          </div>
          <div className='input'>
            <select name='usertype' value={cred.usertype} onChange={onchange} id='role'>
              <option>Please Select your Role</option>
              <option value={"user"}>User</option>
              <option value={"admin"}>Admin</option>
              <option value={"superAdmin"}>Super Admin</option>
            </select>
          </div>
        </div>
        <div className="submit-container">
          <div className="submit gray1" onClick={handleSubmit}>Log In</div>
        </div>
      </form>
    </div>
  )
}

export default SignIn