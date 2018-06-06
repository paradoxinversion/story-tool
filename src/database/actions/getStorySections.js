"use strict";

const Section = require("../schema/Section");
const getHighestSectionInStory = require("../actions/getHighestSectionInStory");
const renumberSections = require("../actions/renumberSections");

/**
 * Returns all sections whos story matches the given id in ascending our, according to their number.
 * Automatically renumbers sections.
 * @param {string} storyId
 */
const getStorySections = async storyId => {
  await renumberSections(storyId);
  const sections = await Section.find({ story: storyId }).sort("number");

  if (sections) {
    return sections;
  }
};

module.exports = getStorySections;
