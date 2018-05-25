import React from "react";
import { Link } from "react-router-dom";
const UserStories = props => {
  console.log("UserStories", props);
  if (props.stories.length === 0) {
    return <p>You have not written any stories yet</p>;
  } else {
    return (
      <div>
        {props.stories.map(story => (
          <button
            key={story._id}
            onClick={() => {
              props.setStory(story);
              props.setWorkingId(story._id);
              props.setMode("story-overview");
            }}>
            {story.title}
          </button>
        ))}
      </div>
    );
  }
};

export default UserStories;
