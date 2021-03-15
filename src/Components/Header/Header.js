import React from "react";
import { Link } from "react-router-dom";
import './Header.css';


function Header() {
    return (
        <div className='Header'>
            <ul>
                {/* <img src={ThreeAcorns} alt="" className='Header-logo' /> */}
                <Link to='/'>
                <h1>Aurora Park</h1>
                </Link>
                <li><Link to='/location'>
                    <h2>Location</h2>
                </Link>
                </li>
                <li><Link to='/contact'>
                    <h2>Contact Us</h2>
                </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;