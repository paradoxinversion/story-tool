import React from "react";
import { Link } from "react-router-dom";
const UserStories = props => {
  if (props.stories.length === 0) {
    return <p>You have not written any stories yet</p>;
  } else {
    return (
      <ul>
        {props.stories.map(story => (
          <li>
            <Link
              to={{ pathname: `/tool/story/${story._id}`, state: { story } }}>
              {story.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
};

export default UserStories;
