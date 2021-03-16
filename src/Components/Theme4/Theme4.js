import React, { Component } from 'react';
import Cougar_IMAGE from "./Images/Cougar.png";
import Horses_IMAGE from "./Images/Horses.png";
import Lyon_IMAGE from "./Images/ReyLeon.jpg";
import Ducks_IMAGE from "./Images/DucksPerson.png";
import "./Theme4.css";
import { Link } from 'react-router-dom';
import '../App/App.css';

class Theme4 extends Component {
render(){
        // console.log("Home dot JS", this.props.comments);
        return(
            <div className="Theme4"> 
                    <h1> Picnic Area </h1>
                <div className="grid-container3"> 
                    <div className="T4-Image1">
                         <img className='theme3-img' src={Cougar_IMAGE } alt="picnic"/> 
                    </div>
                    <div className="T4-Image2">
                      <img className='theme3-img' src={Horses_IMAGE} alt="play"/>
                    </div> 
                    <div className="T4-Image3">
                        <img className='theme3-img' src={Lyon_IMAGE} alt="picnic"/>
                    </div>
                    <div className="T4-Image4">
                        <img className='theme4-img' src={Ducks_IMAGE} alt="picnic"/>
                    </div>

                </div>
            </div>
            
        )
    }
}

export default Theme4;