import React from "react";
import { Link } from "react-router-dom";
const UserStories = props => {
  if (props.stories === null || props.stories.length === 0) {
    return <p>You have not written any stories yet</p>;
  } else {
    return (
      <div>
        {props.stories.map(story => (
          <button
            className="story-entry-button"
            key={story._id}
            onClick={() => {
              props.setWorkingStory(story);
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
