import React from "react";
const UserStories = props => {
  if (props.stories.length === 0) {
    return <p>You have not written any stories yet</p>;
  } else {
    return (
      <ul>
        {props.stories.map(story => (
          <li>
            <p>Story</p>
          </li>
        ))}
      </ul>
    );
  }
};

export default UserStories;
