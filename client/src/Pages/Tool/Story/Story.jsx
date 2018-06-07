import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import deleteStory from "../../../toolCommands/story/deleteStory";
import "./Story.css";
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
            <p className="story__title">{this.props.story.title}</p>
            <p className="story__synopsis">{this.props.story.synopsis}</p>
            <p className="story__parts">
              {this.props.story.sections.length} parts written
            </p>
            <div className="panel panel--horizontal story__commands">
              <button
                className="button"
                onClick={async () => {
                  if (
                    window.confirm(
                      "Are you sure you wish to delete this Story?"
                    )
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
            </div>
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
