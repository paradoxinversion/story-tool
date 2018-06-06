import React, { Component } from "react";
import UserStories from "../../../Components/UserStories/UserStories";
import getUserStories from "../../../toolCommands/story/getUserStories";
import "./Stories.css";

class Stories extends Component {
  async componentDidMount() {
    const result = await getUserStories(this.props.user.id);
    await this.props.setStories(result.data.stories);
  }
  render() {
    return (
      <div className="stories">
        <p>Stories</p>
        <UserStories
          setMode={this.props.setMode}
          setWorkingStory={this.props.setWorkingStory}
          workingStory={this.props.workingStory}
          workingSection={this.props.workingSection}
          stories={this.props.stories}
        />
      </div>
    );
  }
}

export default Stories;
