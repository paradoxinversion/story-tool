import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import LogIn from "./LogIn/LogIn";
class Auth extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { match } = this.props;
    return (
      <Fragment>
        <Switch>
          <Route exact path={`${match.url}/signup`} component={SignUp} />
          <Route path={`${match.url}/login`} component={LogIn} {...rest} />
        </Switch>
      </Fragment>
    );
  }
}

export default Auth;
