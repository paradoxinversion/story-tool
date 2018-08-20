"use strict";

const Story = require("../../schema/Story");

/**
 * Returns a single story with the supplied id
 * @param {string} storyId
 */
const getStoryById = async storyId => {
  try {
    const rawStory = await Story.findOne({ _id: storyId }).populate("sections");

    const story = await rawStory.returnStoryInstance();
    return story;
  } catch (e) {
    console.log(e);
  }
};

module.exports = getStoryById;
