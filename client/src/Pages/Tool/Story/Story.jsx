import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import deleteStory from "../../../toolCommands/story/deleteStory";
class Story extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const result = await axios.get(
      `http://localhost:3001/api/stories/${this.props.workingStory.id}`
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
            <button
              onClick={async () => {
                if (
                  window.confirm("Are you sure you wish to delete this Story?")
                ) {
                  const result = await deleteStory(this.props.story.id);

                  if (result.status === 200) {
                    this.props.setWorkingStory(null);
                    this.props.setMode("stories-list");
                  }
                }
              }}>
              Delete Story
            </button>
            <p>Story: {this.props.story.title}</p>
            <p>Synopsis: {this.props.story.synopsis}</p>
            <p>Parts: {this.props.story.sections.length} </p>
            {/* <p>Characters</p>
            <p>Locations</p>
            <p>Items/Objects</p>
            <p>Notes</p> */}
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
