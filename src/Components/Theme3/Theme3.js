import React, { Component } from 'react';
import Cannoeing_IMAGE from "./Images/CannoeingMany.png";
import Cannoeing2_IMAGE from "./Images/CanoeingLarge.jpg";
import Hike1_IMAGE from "./Images/HikeAtBell.png";
import Hike2_IMAGE from "./Images/HikeToBell.png";
import "./Theme3.css";
import Comment from "../Comment/Comment";
import { Link } from 'react-router-dom';
import '../App/App.css';

class Theme3 extends Component {
render(){
        // console.log("Home dot JS", this.props.comments);
        return(
            <div className="Theme3"> 
                    <h1 className="theme-title"> Actividades al Aire Libre </h1>
                <div className="grid-container"> 
                    <div className="Image1">
                         <img className='theme-img' src={Cannoeing_IMAGE } alt="picnic"/> 
                    </div>
                    <div className="Image2">
                      <img className='theme-img' src={Cannoeing2_IMAGE} alt="play"/>
                    </div> 
                    <div className="Image3">
                        <img className='theme-img' src={Hike2_IMAGE} alt="picnic"/>
                    </div>
                    <div className="Image4">
                        <img className='theme-img' src={Hike1_IMAGE} alt="picnic"/>
                    </div>
                    <p className="theme-paragraph">  El parque ofrece una gran variedad de canoas y kayaks para que navegue con su familia y amigos en el lago o explore la quebrada. <br/> <br/>
                     Camine por los senderos del parque o escale la monta&ntilde;a de la torre de la campana</p>
                    {/* <Comment {...this.props}/>  */}

                </div>
            </div>
            
        )
    }
}

export default Theme3;