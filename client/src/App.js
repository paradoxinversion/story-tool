import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { hot } from "react-hot-loader";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Tool from "./Pages/Tool/Tool";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import "normalize.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      user: null,
      story: null
    };
    this.setAuthentication = this.setAuthentication.bind(this);
    this.setStory = this.setStory.bind(this);
  }
  setAuthentication(authenticationStatus, user = null) {
    this.setState({
      isAuthenticated: authenticationStatus,
      user: user
    });
  }

  setStory(story) {
    this.setState({
      story
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header authenticated={this.state.isAuthenticated} />
          <Route exact path="/" component={Home} />
          <Route
            path="/auth"
            render={() => <Auth setAuthentication={this.setAuthentication} />}
          />
          <PrivateRoute
            path="/tool"
            authenticated={this.state.isAuthenticated}
            user={this.state.user}
            setStory={this.setStory}
            story={this.state.story}
            component={Tool}
          />
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
