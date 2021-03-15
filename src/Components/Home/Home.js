import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';

class Home extends Component {
render(){
        // console.log("Home dot JS", this.props.comments);
        return(
            <div className="Home"> 
                <div>
                    <Link to='/theme/1'>Picnic</Link>
                </div>
                <div>
                    <Link to='/theme/2'>Pool</Link>
                </div> 
                <div>
                    <Link to='/theme/3'>Wild</Link>
                </div>
                <div>
                    <Link to='/theme/4'>Hiking</Link>
                </div>

            </div>
            
        )
    }
}

export default Home;