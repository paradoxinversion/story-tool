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
        setWorkingStoryId={props.setWorkingStoryId}
        workingStoryId={props.workingStoryId}
        workingSectionId={props.workingSectionId}
        stories={props.user.stories}
      />
    </div>
  );
};

export default Stories;
