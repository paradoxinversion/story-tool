"use strict";

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import StoryParts from "../../../Components/StoryParts/StoryParts";
import getStorySections from "../../../toolCommands/section/getStorySections";
import PropTypes from "prop-types";
class StorySections extends Component {
  constructor(props) {
    super(props);
  }
  async getSections() {
    const result = await getStorySections(this.props.workingStory.id);
    if (result.status === 200) {
      this.props.setWorkingSections(result.data.sections);
    }
  }

  async componentDidMount() {
    await this.getSections();
  }
  render() {
    return (
      <section className="workspace-container">
        <button
          className="button button-primary "
          onClick={() => {
            this.props.setMode("new-section");
          }}>
          New Section
        </button>
        {this.props.workingSections ? (
          <StoryParts
            setWorkingSection={this.props.setWorkingSection}
            setWorkingSections={this.props.setWorkingSections}
            setMode={this.props.setMode}
            workingStory={this.props.workingStory}
            storyParts={this.props.workingSections}
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
