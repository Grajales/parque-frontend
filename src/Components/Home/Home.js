import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
class Home extends Component {
render(){
        console.log("Home dot JS", this.props.comments);
        return(
            <div> Aurora Park  </div>
        )
    }
}

export default Home;