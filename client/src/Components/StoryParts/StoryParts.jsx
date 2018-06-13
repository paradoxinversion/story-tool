import React from "react";
import moveSection from "../../toolCommands/section/moveSection";
import axiosInstance from "../../axiosInstance";
import store from "store";

import "./StoryParts.css";
const StoryParts = props => {
  if (props.storyParts.length === 0) {
    return <p>You have not written any story sections yet.</p>;
  } else {
    return (
      <div>
        {props.storyParts.map(section => (
          <div key={section._id} className="panel panel--horizontal story-part">
            <p className="story-part__index">{section.number + 1}</p>
            <div className="story-part__title" key={section._id}>
              {section.name}
            </div>
            <div className="story-part__options">
              <button
                className="button story-part__options__item"
                onClick={async () => {
                  await props.setWorkingSection(section);
                  props.setMode("view-section");
                }}>
                Open
              </button>
              <button
                className="button story-part__options__item"
                onClick={async () => {
                  const result = await moveSection(
                    props.workingStory.id,
                    section._id,
                    false
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
                  const result = await moveSection(
                    props.workingStory.id,
                    section._id,
                    true
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
