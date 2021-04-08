import React, { Component } from 'react';
import PICNIC1_IMAGE from "./Images/Picnic.png";
import PICNIC2_IMAGE from "./Images/Picnic2.png";
import PICNIC3_IMAGE from "./Images/Playground2.jpg";
import PICNIC4_IMAGE from "./Images/Redbridge2.jpg";
import "./Theme2.css";
import Comment from "../Comment/Comment";
import { Link } from 'react-router-dom';
import '../App/App.css';

class Theme2 extends Component {
render(){
        // console.log("Home dot JS", this.props.comments);
        return(
            <div className="Theme2"> 
                    <h1 className="theme-title"> Picnic Area </h1>
                <div className="grid-container"> 
                    <div className="Image1">
                         <img className='theme-img' src={PICNIC2_IMAGE} alt="picnic"/> 
                    </div>
                    <div className="Image2">
                      <img className='theme-img' src={PICNIC1_IMAGE} alt="play"/>
                    </div> 
                    <div className="Image3">
                        <img className='theme-img' src={PICNIC3_IMAGE} alt="picnic"/>
                    </div>
                    <div className="Image4">
                        <img className='theme-img' src={PICNIC4_IMAGE} alt="picnic"/>
                    </div>
                    <p className="theme-paragraph"> The park has covered picnic areas with grills and benches, bring your food and charcoal or purchase it at the local store      </p>
                    {/* <Comment {...this.props}/>  */}

                </div>
            </div>
            
        )
    }
}

export default Theme2;