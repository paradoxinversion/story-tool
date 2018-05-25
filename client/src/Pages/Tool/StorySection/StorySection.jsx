import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import StoryParts from "../../../Components/StoryParts/StoryParts";
import axios from "axios";
class StorySection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: null
    };
  }

  async componentDidMount() {
    const result = await axios.get(
      `http://localhost:3001/api/stories/${this.props.workingStoryId}/${
        this.props.workingSectionId
      }`
    );
    if (result.status === 200) {
      this.setState({ section: result.data.section });
    }
  }

  render() {
    console.log(this.props);

    return (
      <section className="workspace-container">
        {this.state.section ? (
          <div className="story">
            <button>Delete Part (eventually)</button>
            <p>{this.state.section.name}</p>
            <p>{this.state.section.content}</p>
          </div>
        ) : (
          <div>
            <p> Section loading... </p>
          </div>
        )}
      </section>
    );
  }
}

export default withRouter(StorySection);
