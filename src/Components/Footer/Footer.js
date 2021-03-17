import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";
import FACEBOOK_LOGO from "./Images/FacebookLogo.png";

function Footer() {
    return (
        <div className='Footer'>
            <div className='logo-pos'>  
             <Link to={{pathname:'https://www.facebook.com/parqueaurorahn/'}} target="blank" > <img src={FACEBOOK_LOGO} alt="" className='Facebook-logo'/> </Link>
             
        <div className="footer-copyright"> copyright 2021</div>
         </div>
         </div>
    );
}

export default Footer;