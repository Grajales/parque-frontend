import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import LOGO_IMAGE from "./Images/logo.png";

function Header() {
    return (
        <div className='Header'>
             
            <ul>
            <img src={LOGO_IMAGE} alt="" className='Header-logo' /> 
                <Link to='/' style={{textDecoration: 'none'}} >
                <h1 className="HeaderTitle">Aurora Park </h1>
                </Link>
                {/* <Link to='/'style={{color:"cornsilk"}} >
                <h1 className="HeaderTitle">Aurora Park </h1>
                </Link> */}
                <li className="li-link"><Link to='/location' style={{textDecoration: 'none'}}>
                    <h3 className="h-link">Location</h3>
                </Link>
                </li>
                <li className="li-link"><Link to='/contact' style={{textDecoration: 'none'}}>
                    <h3 className="h-link">Contact Us</h3>
                </Link>
                </li>
            </ul>

        </div>
    );
}

export default Header;