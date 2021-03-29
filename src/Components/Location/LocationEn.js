import React, { Component } from 'react';
import Google_IMAGE from "./Images/AuroraParkGoogle.png";
import Honduras_IMAGE from "./Images/HondurasMap.png";
import './Location.css';
import { Link } from 'react-router-dom';

class Location extends Component {
render(){
        return(
            <div className="Location"> 
                <Link to={{pathname:'https://www.google.com/maps/place/Aurora+Park/@14.2832625,-87.4078118,16z/data=!4m5!3m4!1s0x0:0x45948958cec787aa!8m2!3d14.2846194!4d-87.4044867'}} style={{textDecoration: 'none'}} target="blank">
                    <h1 className="V-Title"> Visit Us </h1>
                </Link>
                <div className="Maps">    
                    <div className="MapCountry">
                    <Link to={{pathname:'https://www.google.com/maps/place/Aurora+Park/@14.2832625,-87.4078118,16z/data=!4m5!3m4!1s0x0:0x45948958cec787aa!8m2!3d14.2846194!4d-87.4044867'}} target="blank">
                      <img className='map-img' src={Honduras_IMAGE} alt="picnic"/> 
                      </Link>
                    </div>
                    <div className="MapRoad">
                        <Link to={{pathname:'https://www.google.com/maps/place/Aurora+Park/@14.2832625,-87.4078118,16z/data=!4m5!3m4!1s0x0:0x45948958cec787aa!8m2!3d14.2846194!4d-87.4044867'}} target="blank">
                           <img className='map-img' src={Google_IMAGE} alt="play"/>
                        </Link>
                    </div> 
                </div>
            </div>
            
        )
    }
}

export default Location;