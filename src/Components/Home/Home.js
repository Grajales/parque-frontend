import React, { Component } from 'react';
import PICNIC_IMAGE from "./Images/HomePicnic.png";
import PLAY_IMAGE from "./Images/HomePlayGround.png";
import HIKE_IMAGE from "./Images/HomeRedBridge.jpg";
import ANIMALS_IMAGE from "./Images/HomeHorsesDucks.jpg";
import WelcomeVideo from "./Videos/VID-20210404-WA0010.mp4";
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
                    <div className="video">
                        <h2>  Bienvenida e Informaci&oacute;n </h2>
                        <video src={WelcomeVideo} width="300" height="200" controls="controls" />
                        {/* <video src={WelcomeVideo} width="300" height="200" controls="controls" autoplay="true" /> */}
                        
                    </div>
                    <div className="theme1">
                        <Link to='/theme/1'> <img className='Home-Image' src={PLAY_IMAGE} alt="play"/> </Link>
                        <Link to='/theme/1'> <h2 className="img-title"> Juegos y Entretenimiento </h2> </Link>
                    </div>
                    <div className="theme2">
                        <Link to='/theme/2'><img className='Home-Image' src={PICNIC_IMAGE} alt="picnic"/></Link>
                        <Link to='/theme/2'> <h2 className="img-title"> Zona de P&iacute;cnic </h2> </Link>
                    </div> 
                    <div className="theme3">
                        <Link to='/theme/3'><img className='Home-Image' src={HIKE_IMAGE} alt="hicking"/></Link>
                        <Link to='/theme/3'> <h2 className="img-title"> Actividades al Aire Libre</h2> </Link>
                    </div>
                    <div className="theme4">
                        <Link to='/theme/4'><img className='Home-Image' src={ANIMALS_IMAGE} alt="animals"/></Link>
                        <Link to='/theme/4'> <h2 className="img-title"> Animales y Plantas </h2> </Link>
                    </div>

                </div>
                </main>
            </div>
            
        )
    }
}

export default Home;