"use strict";

const Story = require("../schema/Story");

/**
 * Removes a story from the database by its Id
 * @param {string} storyId The Id of the story to delete
 */
const deleteStory = async storyId => {
  const deletionResult = await Story.deleteOne({ _id: storyId });
  return deletionResult;
};

module.exports = deleteStory;
