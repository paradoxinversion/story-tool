import React, { Component } from "react";
class Dashboard extends Component {
  render() {
    return <div> Hello, {this.props.user.username}</div>;
  }
}

export default Dashboard;
