"use strict";
const Story = require("../schema/Story");
const renumberSections = require("./renumberSections");
const getHighestSectionInStory = async function(storyId) {
  const result = {
    length: null,
    lowest: null,
    highest: null
  };
  const sections = await Story.findOne({ _id: storyId })
    .populate("sections")
    .select("sections");
  result.length = sections.sections.length;
  sections.sections.forEach(section => {
    if (result.highest === null || section.number > result.highest) {
      result.highest = section.number;
    }
    if (result.lowest === null || section.number < result.lowest) {
      result.lowest = section.number;
    }
  });
  return result;
};

module.exports = getHighestSectionInStory;
