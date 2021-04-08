import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import Button from 'react-bootstrap/Button';
import './Header.css';
import LOGO_IMAGE from "./Images/logo.png";

function Header() {
    const options = [
         'Espanol','English'
      ];
      const defaultOption = options[0];
      
    return (
        <div className='Header'>
             
            <ul>
            <img src={LOGO_IMAGE} alt="" className='Header-logo' /> 
                {/* <Link to='/' style={{textDecoration: 'none'}} >
                <h1 className="HeaderTitle">Aurora Park </h1>
                </Link> */}
                <Link to='/'style={{color:"cornsilk", textDecorationLine: 'underline'}} >
                <h1 className="HeaderTitle">Parque Aurora </h1>
                </Link>
                <li className="li-link"><Link to='/location' style={{textDecoration: 'none'}}>
                    <h3 className="h-link">Ubicaci&oacute;n</h3>
                </Link>
                </li>
                <li className="li-link"><Link to='/contact' style={{textDecoration: 'none'}}>
                    <h3 className="h-link">Cont&aacute;ctenos</h3>
                </Link>
                </li>
                
                <li className="li-link">
                
                {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />; */}
    
                {/* <Dropdown options={options} value={defaultOption} placeholder="Select an option" >; 
                </Dropdown>  */}
                 
                </li>
            </ul>

        </div>
    );
}

export default Header;