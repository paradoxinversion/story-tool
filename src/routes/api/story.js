const addStory = require("../../database/actions/addStory");
const getStoryById = require("../../database/actions/getStoryById");
const addStorySection = require("../../database/actions/addStorySection");
const getStorySections = require("../../database/actions/getStorySections");
const addNewStory = async (req, res) => {
  try {
    const newStory = await addStory(
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

const getStoryByStoryId = async (req, res) => {
  try {
    const story = await getStoryById(req.params.storyId);
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
    const section = await addStorySection(
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
    const sections = await getStorySections(
      req.body.name,
      req.body.content,
      req.params.storyId
    );
    res.status(200).json({
      message: "Got story sections",
      sections
    });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
module.exports = {
  addNewStory,
  getStoryByStoryId,
  createNewStorySection,
  getAllStorySections
};
