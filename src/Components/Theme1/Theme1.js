import React, { Component } from 'react';
// import PICNIC_IMAGE from "../../Images/HomePicnic.png";
// import PLAY_IMAGE from "../../Images/HomePlayGround.png";
// import CANNOE_IMAGE from "../../Images/HomeCannoeing.png";
// import HIKE_IMAGE from "../../Images/HomeRedBridge.jpg";
// import "./Home.css";
// import { Link } from 'react-router-dom';
// import '../App/App.css';

class Home extends Component {
render(){
        // console.log("Home dot JS", this.props.comments);
        return(
            <div> 
                    <h4>this is theme 1 page!!!</h4>
                {/* <div className="Home"> 
                    <div>
                        <Link to='/theme/1'> <img className='Home-Image' src={PICNIC_IMAGE} alt="picnic"/> </Link>
                    </div>
                    <div>
                        <Link to='/theme/2'><img className='Home-Image' src={PLAY_IMAGE} alt="play"/></Link>
                    </div> 
                    <div>
                        <Link to='/theme/3'><img className='Home-Image' src={CANNOE_IMAGE} alt="picnic"/></Link>
                    </div>
                    <div>
                        <Link to='/theme/4'><img className='Home-Image' src={HIKE_IMAGE} alt="picnic"/></Link>
                    </div>

                </div> */}
            </div>
            
        )
    }
}

export default Home;