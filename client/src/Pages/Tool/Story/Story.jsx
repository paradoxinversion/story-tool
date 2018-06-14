"use strict";

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import deleteStory from "../../../toolCommands/story/deleteStory";
import getStory from "../../../toolCommands/story/getStory";
import "./Story.css";

class Story extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const result = await getStory(this.props.workingStory.id);
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

            <div className="panel panel--horizontal story__commands">
              <button
                className="button button-primary story__commands__command"
                onClick={() => {
                  this.props.setMode("story-sections");
                }}>
                <i className="fas fa-file-alt icon-medium button__icon" />
                <i className="fas fa-file-alt icon-medium button__icon" />
                <i className="fas fa-file-alt icon-medium button__icon" />
              </button>
              <button
                className="button button-negative story__commands__command"
                onClick={async () => {
                  if (
                    window.confirm(
                      "Are you sure you wish to delete this Story?"
                    )
                  ) {
                    const result = await deleteStory(
                      this.props.workingStory.id
                    );

                    if (result.status === 200) {
                      this.props.setWorkingStory(null);
                      this.props.setMode("stories-list");
                    }
                  }
                }}>
                <i className="fas fa-trash icon-medium " />
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
