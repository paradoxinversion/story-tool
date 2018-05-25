import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import StoryParts from "../../../Components/StoryParts/StoryParts";
import axios from "axios";
class StorySections extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <section className="workspace-container">
        {this.props.story ? (
          <StoryParts
            setWorkingSectionId={this.props.setWorkingSectionId}
            setMode={this.props.setMode}
            storyParts={this.props.story.sections}
          />
        ) : (
          <div>
            <p> Story loading... </p>
          </div>
        )}
      </section>
    );
  }
}

export default withRouter(StorySections);
