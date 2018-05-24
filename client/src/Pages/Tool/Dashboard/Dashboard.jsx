import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserStories from "../../../Components/UserStories/UserStories";
class Dashboard extends Component {
  render() {
    return (
      <div>
        {" "}
        <p>Hello, {this.props.user.username}</p>
        <Link to="/tool/new-story">New Story </Link>
        <UserStories stories={this.props.user.stories} />
      </div>
    );
  }
}

export default Dashboard;
