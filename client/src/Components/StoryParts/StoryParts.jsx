import React from "react";
import { Link } from "react-router-dom";
const StoryParts = props => {
  console.log("StoryParts", props);
  if (props.storyParts.length === 0) {
    return <p>You have not written any storyParts yet</p>;
  } else {
    return (
      <div>
        {props.storyParts.map(storyPart => (
          <button
            key={storyPart._id}
            onClick={() => {
              props.setMode("story-overview");
            }}>
            {storyPart.name}
          </button>
        ))}
      </div>
    );
  }
};

export default StoryParts;
