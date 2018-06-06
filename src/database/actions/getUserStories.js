"use strict";

const Story = require("../schema/Story");

/**
 * Returns an array of all stories who's author matches the supplied Id
 * @param {string} userId
 */
const getUserStories = async userId => {
  const stories = await Story.find({ author: userId });
  if (stories) {
    console.log(stories);
    return stories;
  }
};

module.exports = getUserStories;
