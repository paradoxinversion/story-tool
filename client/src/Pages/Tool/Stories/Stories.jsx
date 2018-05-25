import React from "react";
import UserStories from "../../../Components/UserStories/UserStories";

const Stories = props => {
  console.log(props);
  return (
    <div>
      <p>Stories</p>
      <UserStories
        setMode={props.setMode}
        setStory={props.setStory}
        setWorkingId={props.setWorkingId}
        workingId={props.workingId}
        stories={props.user.stories}
      />
    </div>
  );
};

export default Stories;
