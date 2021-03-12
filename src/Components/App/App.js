import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Home from "../Home/Home"; 
// import AllArtists from "./AllArtists.js";
import axios from "axios";
const backendUrl =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/api";
// const backendUrl =
//   process.env.REACT_APP_BACKEND_URL || "https://project4-backend.herokuapp.com/api";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    axios.get(`${backendUrl}/comments`).then((response) => {
      
      this.setState({
        comments: response.data.comments,
      });
    });
  }


  render() {
    console.log("App dot JS",this.state.comments);
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <main>
            <Route exact path='/' render={routerProps =>
                <Home {...routerProps} {...this.state} />
            }>
            </Route>
    
        </main>
      </div>
    );
  }
}

export default App;
