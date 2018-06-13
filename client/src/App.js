import React, { Component } from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import { hot } from "react-hot-loader";
import store from "store";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Tool from "./Pages/Tool/Tool";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import PrivateRouteAsync from "./Components/PrivateRouteAsync/PrivateRouteAsync";
import checkToken from "./toolCommands/user/checkToken";
import "normalize.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      user: null
    };
    this.setAuthentication = this.setAuthentication.bind(this);
    this.checkClientAuthentication = this.checkClientAuthentication.bind(this);
  }
  async checkClientAuthentication() {
    const token = store.get("storytool").token;
    if (token) {
      const tokenResult = await checkToken(token);
      if (tokenResult.status === 200) {
        await this.setAuthentication(true, tokenResult.data.user.user);
      }
      return true;
    } else {
      return false;
    }
  }
  async componentDidMount() {
    const token = store.get("storytool").token;
    if (token) {
      const tokenResult = await checkToken(token);
      console.log(tokenResult);
      if (tokenResult.status === 200) {
        await this.setAuthentication(true, tokenResult.data.user.user);
      }
    }
  }
  setAuthentication(authenticationStatus, user = null) {
    this.setState({
      isAuthenticated: authenticationStatus,
      user: user
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header
            setAuthentication={this.setAuthentication}
            authenticated={this.state.isAuthenticated}
            user={this.state.user}
          />
          <Route exact path="/" component={Home} />
          <Route
            path="/auth"
            render={() => <Auth setAuthentication={this.setAuthentication} />}
          />
          <PrivateRouteAsync
            path="/tool"
            authenticated={this.state.isAuthenticated}
            checkAuthentication={this.checkClientAuthentication}
            user={this.state.user}
            component={Tool}
          />
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
