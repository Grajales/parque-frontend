import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
class Home extends Component {
render(){
        console.log("test home", this.props)
        return(
            <div> Aurora Park  </div>
        )
    }
}

export default Home;