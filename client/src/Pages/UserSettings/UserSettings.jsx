import React, { Component, Fragment, Link } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Account from "./Account/Account";
import SettingsNavigation from "./SettingsNavigation/SettingsNavigation";

const userSettingsPages = {
  ["account"]: Account
};
class UserSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "account"
    };
    this.setMode = this.setMode.bind(this);
  }

  async setMode(mode) {
    await this.setState({
      mode
    });
  }

  render() {
    const CurrentSettingsPage = userSettingsPages[this.state.mode];
    const { match } = this.props;
    return (
      <div className="horizontal-container">
        <SettingsNavigation setMode={this.setMode} {...this.props} />
        <CurrentSettingsPage setMode={this.setMode} {...this.props} />
      </div>
    );
  }
}

export default withRouter(UserSettings);
