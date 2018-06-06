import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
class Story extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const result = await axios.get(
      `http://localhost:3001/api/stories/${this.props.workingStory._id}`
    );
    if (result.status === 200) {
      this.props.setStory(result.data.story);
    }
  }

  render() {
    return (
      <section className="workspace-container">
        {this.props.story ? (
          <div className="story">
            <button>Delete Story</button>
            <p>Story: {this.props.story.title}</p>

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
      </section>
    );
  }
}

export default withRouter(Story);
