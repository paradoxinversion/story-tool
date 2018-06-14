import React from "react";
import { Link } from "react-router-dom";
import "./UserStories.css";
const UserStories = props => {
  if (props.stories === null || props.stories.length === 0) {
    return <p>You have not written any stories yet</p>;
  } else {
    return (
      <div className="story-grid-container">
        {props.stories.map(story => (
          <div
            className="panel panel--horizontal"
            key={story.id}
            onClick={() => {
              props.setWorkingStory(story);
              props.setMode("story-overview");
            }}>
            <p className="story-entry__title">{story.title}</p>
          </div>
        ))}
      </div>
    );
  }
};

export default UserStories;
