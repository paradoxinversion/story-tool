const addStory = require("./addStory");
const deleteStory = require("./deleteStory");
const getStoryById = require("./getStoryById");
const addStorySection = require("./addStorySection");
const getStorySections = require("./getStorySections");
const getStorySection = require("./getStorySection");
const editStorySection = require("./editStorySection");
const deleteStorySection = require("./deleteStorySection");
const moveStorySection = require("./moveStorySection");
const getUserStories = require("./getUserStories");

module.exports = {
  story: {
    addStory,
    getUserStories,
    getStoryById,
    deleteStory
  },
  section: {
    addStorySection,
    getStorySection,
    getStorySections,
    editStorySection,
    deleteStorySection,
    moveStorySection
  }
};
