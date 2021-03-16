import React, { Component } from 'react';
import Google_IMAGE from "./Images/AuroraParkGoogle.png";
import Honduras_IMAGE from "./Images/HondurasMap.png";
import './Location.css';

class Location extends Component {
render(){
        // console.log("Home dot JS", this.props.comments);
        return(
            <div className="Location"> 
                    <h1> Location </h1>
                <div className="Maps">    
                    <div className="MapCountry">
                         <img className='map-img' src={Honduras_IMAGE} alt="picnic"/> 
                    </div>
                    <div className="MapRoad">
                      <img className='map-img' src={Google_IMAGE} alt="play"/>
                    </div> 
                    </div>
            </div>
            
        )
    }
}

export default Location;