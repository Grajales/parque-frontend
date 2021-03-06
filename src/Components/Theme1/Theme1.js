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
                    <h1 className="theme-title"> Juegos y Entretenimiento </h1>
                <div className="grid-container"> 
                    <div className="Image1">
                         <img className='theme-img' src={GOROUND_IMAGE} alt="picnic"/> 
                    </div>
                    <div className="Image2">
                      <img className='theme-img' src={MIRROR1_IMAGE} alt="play"/>
                    </div> 
                    <div className="Image3">
                        <img className='theme-img' src={POOLS_IMAGE} alt="picnic"/>
                    </div>
                    <div className="Image4">
                        <img className='theme-img' src={MIRROR2_IMAGE} alt="picnic"/>
                    </div>
                    <p className="theme-paragraph"> El parque ofrece varios lugares de recreaci&oacute;n para ni&ntilde;os y adultos. <br/> <br/>
                    Visite la casa de los espejos y ri&aacute;se de su nueva imagen.<br/> <br/>
                    Tenemos varias piscinas, para ni&ntilde;os y sus padres, o una piscina aparte para adultos o j&oacute;venes que quieran practicar nataci&oacute;n</p>
                    {/* <Comment {...this.props}/>  */}
                </div>
            </div>
            
        )
    }
}

export default Theme1;