import React from 'react'
import "./SignIn.css"
import Header from "../Header/Header";
import mail from "../../assets/mail.png";
import padlock from "../../assets/padlock.png";

const SignIn = () => {
  return (
    <div>
        <Header/>
        <form>
            <div className='header'>
                <div className="text">LogIn</div>
                <div className="underline"></div>
            </div>
            <div className='inputs'>
                <div className="input">
                    <img src={mail} alt="" />
                    <input type="email" name="" id="" placeholder='Email'/>
                </div>
                <div className="input">
                    <img src={padlock} alt="" />
                    <input type="password" name="" id="" placeholder='Password'/>
                </div>
                <div className='input'>
                    <select name='role' id='role'>
                        <option>Please Select your Role</option>
                        <option value={"user"}>User</option>
                        <option value={"admin"}>Admin</option>
                        <option value={"superAdmin"}>Super Admin</option>
                    </select>
                </div>
            </div>
            <div className="submit-container">
                <div className="submit gray1">Log In</div>
            </div>
        </form>
    </div>
  )
}

export default SignIn