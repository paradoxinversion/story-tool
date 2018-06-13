import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
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
          <Route
            exact
            path={`${match.url}/signup`}
            render={() => (
              <SignUp setAuthentication={this.props.setAuthentication} />
            )}
          />
          <Route
            path={`${match.url}/login`}
            render={() => <LogIn {...this.props} />}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(Auth);
