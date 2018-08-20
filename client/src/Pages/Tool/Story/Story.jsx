"use strict";

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import deleteStory from "../../../toolCommands/story/deleteStory";
import getStory from "../../../toolCommands/story/getStory";
import getStorySections from "../../../toolCommands/section/getStorySections";

import moment from "moment";
import "./Story.css";

class Story extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const storyData = await Promise.all([
      getStory(this.props.workingStory.id),
      getStorySections(this.props.workingStory.id)
    ]);

    this.props.setWorkingStory(storyData[0].data.story);
    this.props.setWorkingSections(storyData[1].data.sections);
  }

  render() {
    return (
      <section className="workspace-container">
        {this.props.workingStory !== null ? (
          <div className="story">
            <p className="story__title">{this.props.workingStory.title}</p>
            <p>
              <strong>Synopsis</strong>
            </p>
            <p className="story__synopsis">
              {this.props.workingStory.synopsis}
            </p>
            <p>Created: {this.props.workingStory.createdAt.slice(0, 10)}</p>
            {this.props.workingSections !== null ? (
              <p>Total Sections: {this.props.workingSections.length}</p>
            ) : null}

            <div className="panel panel--horizontal story__commands">
              <button
                className="button button-primary button--medium story__commands__command"
                onClick={() => {
                  this.props.setMode("story-sections");
                }}>
                {" "}
                <p className="button__text">Sections</p>
                <i className="fas fa-file-alt icon-medium button__icon" />
                <i className="fas fa-file-alt icon-medium button__icon" />
                <i className="fas fa-file-alt icon-medium button__icon" />
              </button>
              <button
                className="button button--negative button--medium story__commands__command"
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
                <p className="button__text">Delete</p>
                <i className="fas fa-trash icon-medium button__icon" />
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
