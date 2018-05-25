const addStory = require("../../database/actions/addStory");
const getStoryById = require("../../database/actions/getStoryById");
const addStorySection = require("../../database/actions/addStorySection");
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
      message: "Story added",
      story
    });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

const createNewStorySection = async (req, res) => {
  try {
    const story = await addStorySection(
      req.body.name,
      req.body.content,
      req.params.storyId
    );
    res.status(200).json({
      message: "Story added",
      story
    });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
module.exports = {
  addNewStory,
  getStoryByStoryId,
  createNewStorySection
};
