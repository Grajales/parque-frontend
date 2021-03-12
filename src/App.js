import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
// import ArtistDetail from "./ArtistDetail.js";
// import AllArtists from "./AllArtists.js";
import axios from "axios";
const backendUrl =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/api";
// const backendUrl =
//   process.env.REACT_APP_BACKEND_URL || "https://muse-backend.herokuapp.com/api";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    axios.get(`${backendUrl}/artists`).then((response) => {
      this.setState({
        comments: response.data.comments,
      });
    });
  }


  render() {
    console.log("comments",this.props.comments)
    return (
      <div className="App">
        <nav>
          <Link to="/">All Comments</Link>
        </nav>
        {/* <main>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <AllArtists
                  artists={this.state.artists}
                  addArtist={this.addArtist}
                />
              )}
            />
            <Route
              path="/artists/:id"
              component={(routerProps) => (
                <ArtistDetail
                  {...routerProps}
                  artists={this.state.artists}
                  addSong={this.addSong}
                />
              )}
            />
          </Switch>
        </main> */}
      </div>
    );
  }
}

export default App;
