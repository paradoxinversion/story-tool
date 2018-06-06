const addStory = require("../../database/actions/addStory");
const getStoryById = require("../../database/actions/getStoryById");
const addStorySection = require("../../database/actions/addStorySection");
const getStorySections = require("../../database/actions/getStorySections");
const getStorySection = require("../../database/actions/getStorySection");
const editStorySection = require("../../database/actions/editStorySection");
const deleteStorySection = require("../../database/actions/deleteStorySection");
const moveStorySection = require("../../database/actions/moveStorySection");

module.exports = {
  story: {
    addStory,
    getStoryById
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
