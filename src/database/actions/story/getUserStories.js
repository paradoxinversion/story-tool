"use strict";

const Story = require("../../schema/Story");

/**
 * Returns an array of all stories who's author matches the supplied Id
 * @param {string} userId
 */
const getUserStories = async userId => {
  const rawStories = await Story.find({ author: userId });
  const getStoryInstances = async story => {
    return await story.returnStoryInstance();
  };

  const storiesMap = rawStories.map(getStoryInstances);
  const stories = await Promise.all(storiesMap);

  if (stories) {
    return stories;
  }
};

module.exports = getUserStories;
