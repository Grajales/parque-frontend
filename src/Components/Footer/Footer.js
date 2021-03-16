import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";
import FACEBOOK_LOGO from "./Images/FacebookLogo.png";

function Footer() {
    return (
        <div className='Footer'>
             
            <Link to='/'> <h1>Aurora Park</h1> </Link>
            <Link to=''> <img src={FACEBOOK_LOGO} alt="" className='Facebook-logo' /> </Link>
             <h2>Copyright 2021</h2>
            
        </div>
    );
}

export default Footer;