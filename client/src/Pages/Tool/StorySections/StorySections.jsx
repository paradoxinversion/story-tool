import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import StoryParts from "../../../Components/StoryParts/StoryParts";
import axios from "axios";
class StorySections extends Component {
  constructor(props) {
    super(props);
  }
  async getSections() {
    const result = await axios.get(
      `http://localhost:3001/api/stories/${
        this.props.workingStory._id
      }/sections`
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
