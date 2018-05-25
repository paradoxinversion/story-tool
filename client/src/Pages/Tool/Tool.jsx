import React, { Component, Fragment, Link } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import NewStory from "./NewStory/NewStory";
import Stories from "./Stories/Stories";
import Story from "./Story/Story";
import NewCharacter from "./NewCharacter/NewCharacter";
import NewLocation from "./NewLocation/NewLocation";
import NewObject from "./NewObject/NewObject";
import StorySections from "./StorySections/StorySections";
import StorySection from "./StorySection/StorySection";
import NewSection from "./NewSection/NewSection";

const toolComponents = {
  ["stories-list"]: Stories,
  ["new-story"]: NewStory,
  ["story-overview"]: Story,
  ["new-character"]: NewCharacter,
  ["new-location"]: NewLocation,
  ["new-object"]: NewObject,
  ["story-sections"]: StorySections,
  ["view-section"]: StorySection,
  ["new-section"]: NewSection
};
class Tool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "stories-list",
      workingStoryId: "",
      workingSectionId: ""
    };
    this.setMode = this.setMode.bind(this);
    this.setWorkingStoryId = this.setWorkingStoryId.bind(this);
    this.setWorkingSectionId = this.setWorkingSectionId.bind(this);
  }
  async setMode(mode) {
    await this.setState({
      mode
    });
  }

  async setWorkingStoryId(storyId) {
    await this.setState({
      workingStoryId: storyId
    });
  }
  async setWorkingSectionId(sectionId) {
    await this.setState({
      workingSectionId: sectionId
    });
  }
  render() {
    const CurrentWorkspace = toolComponents[this.state.mode];
    const { match } = this.props;
    return (
      <div className="horizontal-container">
        <Dashboard setMode={this.setMode} {...this.props} />
        <CurrentWorkspace
          setWorkingStoryId={this.setWorkingStoryId}
          setWorkingSectionId={this.setWorkingSectionId}
          workingStoryId={this.state.workingStoryId}
          workingSectionId={this.state.workingSectionId}
          setMode={this.setMode}
          {...this.props}
        />
      </div>
    );
  }
}

export default withRouter(Tool);
