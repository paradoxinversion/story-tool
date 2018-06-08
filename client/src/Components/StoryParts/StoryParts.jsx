import React from "react";
import axiosInstance from "../../axiosInstance";

import "./StoryParts.css";
const StoryParts = props => {
  if (props.storyParts.length === 0) {
    return <p>You have not written any story sections yet.</p>;
  } else {
    return (
      <div>
        {props.storyParts.map(section => (
          <div
            className="panel panel--horizontal"
            onClick={async () => {
              await props.setWorkingSection(section);
              props.setMode("view-section");
            }}>
            <p className="story-part__index">{section.number + 1}</p>
            <div className="story-part__title" key={section._id}>
              {section.name}
            </div>
            <div className="story-part__options">
              <button
                className="button story-part__options__item"
                onClick={async () => {
                  const result = await axiosInstance.get(
                    `/stories/${props.workingStory.id}/${
                      section._id
                    }/move?up=false`
                  );
                  if (result.status === 200) {
                    await props.setWorkingSections(result.data.updatedSections);
                  }
                }}>
                Earlier
              </button>
              <button
                className="button story-part__options__item"
                onClick={async () => {
                  const result = await axiosInstance.get(
                    `/stories/${props.workingStory.id}/${
                      section._id
                    }/move?up=true`
                  );
                  if (result.status === 200) {
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
