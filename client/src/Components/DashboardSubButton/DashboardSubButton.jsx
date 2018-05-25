import React from "react";

const DashboardSubButton = props => {
  if (props.active) {
    return (
      <div
        onClick={() => {
          console.log("Weeeeeeeeeeeee");

          props.setMode(props.mode);
        }}
        className="dashboard__button dashboard__button--sub">
        <p className="dashboard__button--text">{props.text}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default DashboardSubButton;
