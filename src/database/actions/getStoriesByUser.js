"use strict";

const Story = require("../schema/Story");

/**
 * Gets all stories created by a user
 * @param {string} userId The Id of the user who's stories to retrieve
 */
const getStoriesByUser = async userId => {
  try {
    const stories = await Story.findOne({ author: userId });
    return stories;
  } catch (e) {
    console.log(e);
  }
};

module.exports = getStoriesByUser;
