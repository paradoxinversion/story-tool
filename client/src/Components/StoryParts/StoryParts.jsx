import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const StoryParts = props => {
  if (props.storyParts.length === 0) {
    return <p>You have not written any storyParts yet</p>;
  } else {
    return (
      <div>
        {props.storyParts.map(section => (
          <div className="story-part">
            <p>{section.number}</p>
            <div
              key={section._id}
              onClick={async () => {
                await props.setWorkingSection(section);
                props.setMode("view-section");
              }}>
              {section.name}
            </div>
            <div className="story-part__options">
              <button
                className="story-part__options__item"
                onClick={async () => {
                  const result = await axios.get(
                    `http://localhost:3000/api/stories/${
                      props.workingStory._id
                    }/${section._id}/move?up=false`
                  );
                  if (result.status === 200) {
                    console.log("should update?");
                    await props.setWorkingSections(result.data.updatedSections);
                  }
                }}>
                Earlier
              </button>
              <button
                className="story-part__options__item"
                onClick={async () => {
                  const result = await axios.get(
                    `http://localhost:3000/api/stories/${
                      props.workingStory._id
                    }/${section._id}/move?up=true`
                  );
                  if (result.status === 200) {
                    console.log("should update?");
                    await props.setWorkingSections(result.data.updatedSections);
                  }
                }}>
                Later
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default StoryParts;
