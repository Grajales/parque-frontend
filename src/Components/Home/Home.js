import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import PICNIC_IMAGE from "../../Images/HomePicnic.png";
import PLAY_IMAGE from "../../Images/HomePlayGround.png";
import CANNOE_IMAGE from "../../Images/HomeCannoeing.png";
import HIKE_IMAGE from "../../Images/HomeRedBridge.jpg";
import "./Home.css";
class Home extends Component {
render(){
        console.log("test home", this.props)
        return(
            <div> 
                <h1>  Aurora Park      </h1> 
           {/* <Link to='/Theme/1'> <Image className='fun1' src="../../Images/HomeCannoeing.png" alt="cannoeing"/> </Link> */}
            <div> <img className='Home-Image' src={PICNIC_IMAGE} alt="picnic"/>  Picnic Area </div> <br></br>
            <img className='Home-Image' src={PLAY_IMAGE} alt="play"/> <br></br>
            <img className='Home-Image' src={CANNOE_IMAGE} alt="picnic"/> <br></br>
            <img className='Home-Image' src={HIKE_IMAGE} alt="picnic"/> <br></br>

            
            </div>
        )
    }
}

export default Home;