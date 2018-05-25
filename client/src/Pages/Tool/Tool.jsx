import React, { Component, Fragment, Link } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import NewStory from "./NewStory/NewStory";
import Stories from "./Stories/Stories";
import Story from "./Story/Story";
import NewCharacter from "./NewCharacter/NewCharacter";
import NewLocation from "./NewLocation/NewLocation";
import NewObject from "./NewObject/NewObject";
import NewSection from "./NewSection/NewSection";

const toolComponents = {
  ["stories-list"]: Stories,
  ["new-story"]: NewStory,
  ["story-overview"]: Story,
  ["new-character"]: NewCharacter,
  ["new-location"]: NewLocation,
  ["new-object"]: NewObject,
  ["new-section"]: NewSection
};
class Tool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "stories-list",
      workingId: ""
    };
    this.setMode = this.setMode.bind(this);
    this.setWorkingId = this.setWorkingId.bind(this);
  }
  setMode(mode) {
    this.setState({
      mode
    });
  }

  setWorkingId(storyId) {
    this.setState({
      workingId: storyId
    });
  }
  render() {
    const CurrentWorkspace = toolComponents[this.state.mode];
    const { match } = this.props;
    return (
      <div className="horizontal-container">
        <Dashboard setMode={this.setMode} {...this.props} />
        <CurrentWorkspace
          setWorkingId={this.setWorkingId}
          workingId={this.state.workingId}
          setMode={this.setMode}
          {...this.props}
        />
      </div>
    );
  }
}

export default withRouter(Tool);
