import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserStories from "../../../Components/UserStories/UserStories";
class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        {" "}
        <p>Hello, {this.props.user.username}</p>
        <Link to="/tool/new-story">New Story </Link>
        <Link to="/tool/stories">Your Stories </Link>
        {/* <UserStories stories={this.props.user.stories} /> */}
      </div>
    );
  }
}

export default Dashboard;
