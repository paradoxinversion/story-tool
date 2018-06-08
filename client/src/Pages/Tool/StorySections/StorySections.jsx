import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import StoryParts from "../../../Components/StoryParts/StoryParts";
import axiosInstance from "../../../axiosInstance";
import store from "store";

class StorySections extends Component {
  constructor(props) {
    super(props);
  }
  async getSections() {
    const result = await axiosInstance.get(
      `/stories/${this.props.workingStory.id}/sections`,
      { headers: { Authorization: `Bearer ${store.get("token").token}` } }
    );
    if (result.status === 200) {
      this.props.setWorkingSections(result.data.sections);
    }
  }

  async componentWillMount() {
    await this.getSections();
  }
  render() {
    return (
      <section className="workspace-container">
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
