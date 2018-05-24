import React, { Component, Fragment, Link } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import NewStory from "./NewStory/NewStory";
import Stories from "./Stories/Stories";
import Story from "./Story/Story";
class Tool extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { match } = this.props;
    return (
      <div className="horizontal-container">
        <Route render={() => <Dashboard {...this.props} />} />
        <Switch>
          <Route
            path={`${match.url}/new-story`}
            render={() => <NewStory {...this.props} />}
          />
          <Route
            path={`${match.url}/stories`}
            render={() => <Stories {...this.props} />}
          />
          <Route
            path={`${match.url}/story/:id`}
            render={() => <Story {...this.props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Tool);
