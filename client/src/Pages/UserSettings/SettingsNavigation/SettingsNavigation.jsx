import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import DashboardButton from "../../../Components/DashboardButton/DashboardButton";
import "./SettingsNavigation.css";
class SettingsNavigation extends Component {
  render() {
    if (this.props.user === undefined) {
      return (
        <div>
          <p>Loading User Dashboard... Please wait while we get your data!</p>
        </div>
      );
    } else {
      return (
        <div className="dashboard">
          {" "}
          <div className="dashboard__control-group">
            <button
              className="dashboard__button"
              onClick={() => {
                this.props.setMode("account");
              }}>
              Account
            </button>
            <button
              className="dashboard__button"
              onClick={() => {
                this.props.history.push("/tool/dashboard");
              }}>
              Back to ST
            </button>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(SettingsNavigation);
