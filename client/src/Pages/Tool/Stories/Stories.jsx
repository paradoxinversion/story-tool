import React from "react";
import UserStories from "../../../Components/UserStories/UserStories";

const Stories = props => {
  console.log(props);
  return (
    <div>
      <p>Stories</p>
      <UserStories stories={props.user.stories} />
    </div>
  );
};

export default Stories;
