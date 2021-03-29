import React, { Component } from 'react';
import PICNIC_IMAGE from "./Images/HomePicnic.png";
import PLAY_IMAGE from "./Images/HomePlayGround.png";
import HIKE_IMAGE from "./Images/HomeRedBridge.jpg";
import ANIMALS_IMAGE from "./Images/HomeHorsesDucks.jpg";

import "./Home.css";
import { Link } from 'react-router-dom';
import '../App/App.css';

class Home extends Component {
render(){
        // console.log("Home dot JS", this.props.comments);
        return(
            <div> 
                <main> 
                <div className="gridContainerHome">  
                    <div className="theme1">
                        <Link to='/theme/1'> <img className='Home-Image' src={PLAY_IMAGE} alt="play"/> </Link>
                        <h2 className="img-title"> Fun and Play </h2>
                    </div>
                    <div className="theme2">
                        <Link to='/theme/2'><img className='Home-Image' src={PICNIC_IMAGE} alt="picnic"/></Link>
                        <h2 className="img-title">Picnic Area </h2>
                    </div> 
                    <div className="theme3">
                        <Link to='/theme/3'><img className='Home-Image' src={HIKE_IMAGE} alt="hicking"/></Link>
                        <h2 className="img-title"> Outdoor Activities</h2>
                    </div>
                    <div className="theme4">
                        <Link to='/theme/4'><img className='Home-Image' src={ANIMALS_IMAGE} alt="animals"/></Link>
                        <h2 className="img-title"> Wild Life </h2>
                    </div>

                </div>
                </main>
            </div>
            
        )
    }
}

export default Home;