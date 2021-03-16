import React, { Component } from 'react';
import GOROUND_IMAGE from "./Images/MerryGoRound.png";
import MIRROR1_IMAGE from "./Images/MirrorLady.png";
import MIRROR2_IMAGE from "./Images/MirrorFam.png";
import POOLS_IMAGE from "./Images/PoolsWithPeople.jpg";
import Comment from "../Comment/Comment";
import "./Theme1.css";
import { Link } from 'react-router-dom';
import '../App/App.css';

class Theme1 extends Component {
render(){
        // console.log("Home dot JS", this.props.comments);
        return(
            <div className="Theme1"> 
                    <h1> Fun and Play </h1>
                <div className="grid-container"> 
                    <div className="Image1">
                         <img className='theme-img' src={GOROUND_IMAGE} alt="picnic"/> 
                    </div>
                    <div className="Image2">
                      <img className='theme-img' src={MIRROR1_IMAGE} alt="play"/>
                    </div> 
                    <div className="Image3">
                        <img className='theme-img' src={MIRROR2_IMAGE} alt="picnic"/>
                    </div>
                    <div className="Image4">
                        <img className='theme-img' src={POOLS_IMAGE} alt="picnic"/>
                    </div>
                    <Comment {...this.props}/> 
                </div>
            </div>
            
        )
    }
}

export default Theme1;