import React, { Component } from 'react';
import Cougar_IMAGE from "./Images/CannoeingMany.png";
import Horses_IMAGE from "./Images/CanoeingLarge.jpg";
import Lyon_IMAGE from "./Images/HikeAtBell.png";
import Ducks_IMAGE from "./Images/HikeToBell.png";
import "./Theme3.css";
import Comment from "../Comment/Comment";
import { Link } from 'react-router-dom';
import '../App/App.css';

class Theme3 extends Component {
render(){
        // console.log("Home dot JS", this.props.comments);
        return(
            <div className="Theme3"> 
                    <h1> Outdoor Activities </h1>
                <div className="grid-container"> 
                    <div className="Image1">
                         <img className='theme-img' src={Cougar_IMAGE } alt="picnic"/> 
                    </div>
                    <div className="Image2">
                      <img className='theme-img' src={Horses_IMAGE} alt="play"/>
                    </div> 
                    <div className="Image3">
                        <img className='theme-img' src={Lyon_IMAGE} alt="picnic"/>
                    </div>
                    <div className="Image4">
                        <img className='theme-img' src={Ducks_IMAGE} alt="picnic"/>
                    </div>
                    <Comment {...this.props}/> 

                </div>
            </div>
            
        )
    }
}

export default Theme3;