import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
          {/* <header className="main-header">
            <nav>
              <ul className="main-header__nav-list">
                <li>
                  <Link className="main-header__nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="main-header__nav-link" to="/auth/signup">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link className="main-header__nav-link" to="/auth/login">
                    Log In
                  </Link>
                </li>
              </ul>
            </nav>
          </header> */}
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

export default App;
