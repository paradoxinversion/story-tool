import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import axios from "axios";
class Story extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const result = await axios.get(
      `http://localhost:3001/api/stories/${this.props.workingId}`
    );
    if (result.status === 200) {
      this.props.setStory(result.data.story);
    }
  }

  renderStoryInfo() {
    if (this.state.story !== null) {
      return (
        <div className="story">
          {/* <p>Story: {this.state.story.name}</p> */}
          <p>Characters</p>
          <p>Locations</p>
          <p>Items/Objects</p>
          <p>Notes</p>
        </div>
      );
    } else {
      return (
        <div>
          <p> Story loading... </p>
        </div>
      );
    }
  }
  render() {
    console.log(this.props);

    return (
      <div>
        {this.props.story ? (
          <div className="story">
            <p>Story: {this.props.story.title}</p>
            {/* <Link to="/tool/story/:id/new-section" */}
            <p>Synopsis: {this.props.story.synopsis}</p>
            <p>Characters</p>
            <p>Locations</p>
            <p>Items/Objects</p>
            <p>Notes</p>
          </div>
        ) : (
          <div>
            <p> Story loading... </p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Story);
