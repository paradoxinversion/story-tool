import React, { Component } from "react";
import DashboardSubButton from "../DashboardSubButton/DashboardSubButton";
class DashboardButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  render() {
    return (
      <div className="dashboard-button-container">
        <div
          onClick={() => {
            if (this.state.active) {
              this.setState({
                active: false
              });
            } else {
              this.setState({
                active: true
              });
            }
          }}
          className="dashboard__button">
          <p className="dashboard__button--text">{this.props.text}</p>
        </div>
        {this.props.subButtons.map(subButton => (
          <DashboardSubButton
            active={this.state.active}
            key={subButton.text}
            text={subButton.text}
            setMode={this.props.setMode}
            mode={subButton.mode}
          />
        ))}
      </div>
    );
  }
}

export default DashboardButton;
