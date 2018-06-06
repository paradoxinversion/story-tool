const actions = require("../../database/actions/index");
const addNewStory = async (req, res) => {
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
const deleteStory = async (req, res) => {
  try {
    const deletionResult = await actions.story.deleteStory(req.body.storyId);
    res.status(200).json({
      message: "Story Deleted"
    });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
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

const getSingleStorySection = async (req, res) => {
  try {
    console.log("Getting section");
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

const editStorySection = async (req, res) => {
  try {
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
  addNewStory,
  getStoryByStoryId,
  createNewStorySection,
  getAllStorySections,
  getSingleStorySection,
  editStorySection,
  deleteStorySection,
  moveStoryPart
};
