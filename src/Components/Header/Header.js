import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import './Header.css';
// import ThreeAcorns from './three_acorns.jpg';

function Header() {
    return (
        <div className='Header'>
            <ul>
                {/* <img src={ThreeAcorns} alt="" className='Header-logo' /> */}
                <h1>Aurora Park</h1>
                <li><Link to='/location'>
                    <h2>Location</h2>
                </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;