import React, { Component, Fragment, Link } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import NewStory from "./NewStory/NewStory";

class Tool extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { match } = this.props;
    return (
      <Fragment>
        {/* <div>
          <Link to="/tool/new-story">New Story</Link>
        </div> */}
        <Route
          // exact
          // path={`${match.url}/dashboard`}
          render={() => <Dashboard {...this.props} />}
        />
        <Switch>
          <Route
            path={`${match.url}/new-story`}
            render={() => <NewStory {...this.props} />}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(Tool);
