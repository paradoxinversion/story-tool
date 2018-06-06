import React from "react";
import UserStories from "../../../Components/UserStories/UserStories";
import "./Stories.css";

const Stories = props => {
  return (
    <div className="stories">
      <p>Stories</p>
      <UserStories
        setMode={props.setMode}
        setWorkingStory={props.setWorkingStory}
        workingStory={props.workingStory}
        workingSection={props.workingSection}
        stories={props.user.stories}
      />
    </div>
  );
};

export default Stories;
