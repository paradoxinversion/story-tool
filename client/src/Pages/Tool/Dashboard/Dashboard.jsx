import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserStories from "../../../Components/UserStories/UserStories";
import DashboardButton from "../../../Components/DashboardButton/DashboardButton";
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
        {this.props.workingStory ? (
          <div className="dashboard__control-group">
            <DashboardButton
              text="Story"
              className="dashboard__button"
              setMode={this.props.setMode}
              subButtons={[{ text: "Overview", mode: "story-overview" }]}
            />
            <DashboardButton
              text="Sections"
              className="dashboard__button"
              setMode={this.props.setMode}
              subButtons={[
                { text: "Story Sections", mode: "story-sections" },
                { text: "New Section", mode: "new-section" }
              ]}
            />
            {/* <DashboardButton
              text="Characters"
              className="dashboard__button"
              setMode={this.props.setMode}
              subButtons={[{ text: "New Character", mode: "new-character" }]}
            />
            <DashboardButton
              text="Locations"
              className="dashboard__button"
              setMode={this.props.setMode}
              subButtons={[{ text: "New Location", mode: "new-location" }]}
            />
            <DashboardButton
              text="Items/Objects"
              className="dashboard__button"
              setMode={this.props.setMode}
              subButtons={[{ text: "New Object", mode: "new-object" }]}
            /> */}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Dashboard;
