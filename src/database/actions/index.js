"use strict";

const addStory = require("./story/addStory");
const deleteStory = require("./story/deleteStory");
const getStoryById = require("./story/getStoryById");
const addStorySection = require("./sections/addStorySection");
const getStorySections = require("./sections/getStorySections");
const getStorySection = require("./sections/getStorySection");
const editStorySection = require("./sections/editStorySection");
const deleteStorySection = require("./sections/deleteStorySection");
const moveStorySection = require("./sections/moveStorySection");
const getUserStories = require("./story/getUserStories");
const createCharacter = require("./character/createCharacter");
const updateCharacter = require("./character/updateCharacter");
const deleteCharacter = require("./character/deleteCharacter");
const getUserCharacters = require("./character/getUserCharacters");
const getStoryCharacters = require("./character/getStoryCharacters");

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
  },
  character: {
    createCharacter,
    updateCharacter,
    deleteCharacter,
    getUserCharacters,
    getStoryCharacters
  }
};
