import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserStories from "../../../Components/UserStories/UserStories";
class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        {" "}
        <p>Hello, {this.props.user.username}</p>
        <div className="dashboard__control-group">
          <button
            className="dashboard__button"
            onClick={() => {
              this.props.setMode("stories-list");
            }}>
            Stories
          </button>
          <button
            className="dashboard__button"
            onClick={() => {
              this.props.setMode("new-story");
            }}>
            New Story
          </button>
        </div>
        <div className="dashboard__control-group">
          <button
            className="dashboard__button"
            onClick={() => {
              this.props.setMode("new-character");
            }}>
            New Character
          </button>
          <button
            className="dashboard__button"
            onClick={() => {
              this.props.setMode("new-location");
            }}>
            New Location
          </button>
          <button
            className="dashboard__button"
            onClick={() => {
              this.props.setMode("new-section");
            }}>
            New Section
          </button>
          <button
            className="dashboard__button"
            onClick={() => {
              this.props.setMode("new-object");
            }}>
            New Object
          </button>
        </div>
      </div>
    );
  }
}

export default Dashboard;
