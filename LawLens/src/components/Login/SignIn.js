import React from 'react'
import "./SignIn.css"
import Header from "../Header/Header";
import mail from "../../assets/mail.png";
import padlock from "../../assets/padlock.png";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import toast from 'react-hot-toast';

const SignIn = () => {
  const history = useHistory();
  const serverURL = "https://lawlens-vercel.vercel.app";
  const [cred, setCred] = useState({ email: "", password: "", usertype: "" });
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
    }
  };

  
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if(!validateEmail(cred.email)) toast.error("Use correct Credentials")
      if (cred.usertype === 'user' && validateEmail(cred.email)) {
        const response = await fetch(`${serverURL}/api/auth/login`, {
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
        history.push(`./userdashboard`,{
          state : {
            name : json.name
          }
        });
        toast.success(`Welcome ${json.name}🙏`);
      } else if (cred.usertype === 'admin' && validateEmail(cred.email))  {
        const response = await fetch(`http://localhost:3001/api/adminauth/login`, {
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
        history.push('./dashboard', {
          state : {
            name : json.name
          }
        });
        toast.success(`Welcome ${json.name}`);
      }


    } catch (error) {
      console.log(error);
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
            <input type={type} name="password" value={cred.password} onChange={onchange} placeholder='Password' autoComplete='current-password' />
            <span  className='eye' onClick={handleToggle} style={{color:'black'}}><Icon icon={icon} size={25}/></span>
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