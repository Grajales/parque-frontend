import React, { Component } from 'react';
import Cougar_IMAGE from "./Images/Cougar.png";
import Horses_IMAGE from "./Images/Horses.png";
import Lyon_IMAGE from "./Images/ReyLeon.jpg";
import Ducks_IMAGE from "./Images/DucksPerson.png";
import Comment from "../Comment/Comment";
import "./Theme4.css";
import { Link } from 'react-router-dom';
import '../App/App.css';

class Theme4 extends Component {
render(){
        // console.log("Home dot JS", this.props.comments);
        return(
            <div className="Theme4"> 
                    <h1 className="theme-title"> Wild Life </h1>
                <div className="grid-container"> 
                    <div className="Image1">
                         <img className='theme-img' src={Cougar_IMAGE } alt="picnic"/> 
                    </div>
                    <div className="Image2">
                        <img className='theme-img' src={Lyon_IMAGE} alt="picnic"/>
                    </div>
                    <div className="Image3">
                      <img className='theme-img' src={Horses_IMAGE} alt="play"/>
                    </div> 

                    <div className="Image4">
                        <img className='theme-img' src={Ducks_IMAGE} alt="picnic"/>
                    </div>
                    <p className="theme-paragraph"> Visit the wild guest, or take the pathways to explore the parks native flowers and vegetation</p>
                    <Comment {...this.props}/> 
                </div>
            </div>
            
        )
    }
}

export default Theme4;