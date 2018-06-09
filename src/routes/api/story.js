"use strict";

const actions = require("../../database/actions/index");

/**
 * Router handle for creating a new story
 * @param {*} req
 * @param {*} res
 */
const createStory = async (req, res) => {
  try {
    const newStory = await actions.story.addStory(
      req.body.title,
      req.body.synopsis,
      req.body.userId
    );
    res.status(200).json({
      message: "Story added"
    });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

/**
 * Route handler for deleting a story
 * @param {*} req
 * @param {*} res
 */
const deleteStory = async (req, res) => {
  try {
    const deletionResult = await actions.story.deleteStory(req.params.storyId);
    res.status(200).json({
      message: "Story Deleted"
    });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

/**
 * Route handler for getting all user stories
 * @param {*} req
 * @param {*} res
 */
const getUserStories = async (req, res) => {
  try {
    const stories = await actions.story.getUserStories(req.user.user.id);
    res.status(200).json({
      message: "Found user stories",
      stories
    });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

/**
 * Route handler for getting a single story by its Id
 * @param {*} req
 * @param {*} res
 */
const getStoryByStoryId = async (req, res) => {
  try {
    const story = await actions.story.getStoryById(req.params.storyId);
    res.status(200).json({
      message: "Found story",
      story
    });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

/**
 * Route handler for creating a new story section
 * @param {*} req
 * @param {*} res
 */
const createNewStorySection = async (req, res) => {
  try {
    const section = await actions.section.addStorySection(
      req.body.name,
      req.body.content,
      req.params.storyId
    );
    res.status(200).json({
      message: "Story section created",
      section
    });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

/**
 * Route handler for getting all sections of a given story
 * @param {*} req
 * @param {*} res
 */
const getAllStorySections = async (req, res) => {
  try {
    const sections = await actions.section.getStorySections(req.params.storyId);
    res.status(200).json({
      message: "Got story sections",
      sections
    });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

/**
 * Route handler for getting a single story section by its id
 * @param {*} req
 * @param {*} res
 */
const getSingleStorySection = async (req, res) => {
  try {
    console.log("getSingleStorySection");
    console.log(req.params);
    const section = await actions.section.getStorySection(req.params.sectionId);
    res.status(200).json({
      message: "Got story section",
      section
    });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

/**
 * Route handler for editing a story section
 * @param {*} req
 * @param {*} res
 */
const editStorySection = async (req, res) => {
  try {
    console.log("editStorySection");
    const section = await actions.section.editStorySection(
      req.body.name,
      req.body.content,
      req.params.sectionId
    );
    res.status(200).json({
      message: "Edited story section",
      section
    });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

/**
 * Route handler for deleting a single story section by its Id
 * @param {*} req
 * @param {*} res
 */
const deleteStorySection = async (req, res) => {
  try {
    const section = await actions.section.deleteStorySection(
      req.params.sectionId
    );
    res.status(200).json({
      message: "Deleted story section",
      section
    });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

/**
 * Route handler for moving a story part up or down
 * @param {*} req
 * @param {*} res
 */
const moveStoryPart = async (req, res) => {
  try {
    const updatedSections = await actions.section.moveStorySection(
      req.params.storyId,
      req.params.sectionId,
      req.query.up
    );
    res.status(200).json({
      message: "Moved story section",
      updatedSections
    });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

module.exports = {
  createStory,
  deleteStory,
  getStoryByStoryId,
  createNewStorySection,
  getAllStorySections,
  getSingleStorySection,
  editStorySection,
  deleteStorySection,
  moveStoryPart,
  getUserStories
};
