"use strict";
const Story = require("../schema/Story");
const renumberSections = require("./renumberSections");

/**
 * Returns the highest and lowest numbered sections in a given story. This is helpful when determining if section number has fallen out of sync.
 * @param {string} storyId The Id of the story who's sections to search
 */
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
