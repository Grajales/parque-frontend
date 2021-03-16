import React, { Component } from 'react';
import PICNIC1_IMAGE from "./Images/Picnic.png";
import PICNIC2_IMAGE from "./Images/Picnic2.png";
import PICNIC3_IMAGE from "./Images/Playground2.jpg";
import PICNIC4_IMAGE from "./Images/Redbridge2.jpg";
import "./Theme2.css";
import { Link } from 'react-router-dom';
import '../App/App.css';

class Theme2 extends Component {
render(){
        // console.log("Home dot JS", this.props.comments);
        return(
            <div className="Theme2"> 
                    <h1> Picnic Area </h1>
                <div className="grid-container2"> 
                    <div className="T2-Image1">
                         <img className='theme2-img' src={PICNIC1_IMAGE} alt="picnic"/> 
                    </div>
                    <div className="T2-Image2">
                      <img className='theme2-img' src={PICNIC2_IMAGE} alt="play"/>
                    </div> 
                    <div className="T2-Image3">
                        <img className='theme2-img' src={PICNIC3_IMAGE} alt="picnic"/>
                    </div>
                    <div className="T2-Image4">
                        <img className='theme2-img' src={PICNIC4_IMAGE} alt="picnic"/>
                    </div>

                </div>
            </div>
            
        )
    }
}

export default Theme2;