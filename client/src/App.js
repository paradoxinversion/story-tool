import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Tool from "./Pages/Tool/Tool";
import "normalize.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
    this.setAuthentication = this.setAuthentication.bind(this);
  }
  setAuthentication(authenticationStatus) {
    this.setState({
      isAuthenticated: authenticationStatus
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <h1> Story Tool</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/auth/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/auth/login">Log In</Link>
            </li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route
            path="/auth"
            setAuthentication={this.setAuthentication}
            component={Auth}
          />
          <Route path="/tool" component={Tool} />
        </div>
      </Router>
    );
  }
}

export default App;
