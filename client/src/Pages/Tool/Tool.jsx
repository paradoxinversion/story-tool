import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";
class Auth extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { match } = this.props;
    return (
      <Fragment>
        <Switch>
          <Route exact path={`${match.url}/signup`} component={Dashboard} />
        </Switch>
      </Fragment>
    );
  }
}

export default Auth;
