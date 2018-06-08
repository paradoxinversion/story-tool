import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";
import deleteStory from "../../../toolCommands/story/deleteStory";
import "./Story.css";
import store from "store";

class Story extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const result = await axiosInstance.get(
      `/stories/${this.props.workingStory.id}`,
      { headers: { Authorization: `Bearer ${store.get("token").token}` } }
    );
    if (result.status === 200) {
      this.props.setWorkingStory(result.data.story);
    }
  }

  render() {
    return (
      <section className="workspace-container">
        {this.props.workingStory !== null ? (
          <div className="story">
            <p className="story__title">{this.props.workingStory.title}</p>
            <p className="story__synopsis">
              {this.props.workingStory.synopsis}
            </p>
            {/* <p className="story__parts">
              {this.props.workingStory.sections.length} parts written
            </p> */}
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
