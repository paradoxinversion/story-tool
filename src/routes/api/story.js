const addStory = require("../../database/actions/addStory");
const getStoryById = require("../../database/actions/getStoryById");
const addStorySection = require("../../database/actions/addStorySection");
const getStorySections = require("../../database/actions/getStorySections");
const getStorySection = require("../../database/actions/getStorySection");
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
    const sections = await getStorySections(req.params.storyId);
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
    const section = await getStorySection(req.params.sectionId);
    res.status(200).json({
      message: "Got story section",
      section
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
  getAllStorySections,
  getSingleStorySection
};
