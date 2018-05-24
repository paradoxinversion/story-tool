import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
class Tool extends Component {
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
            path={`${match.url}/dashboard`}
            render={() => <Dashboard {...this.props} />}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default Tool;
