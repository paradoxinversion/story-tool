"use strict";

const Section = require("../../schema/Section");
const getHighestSectionInStory = require("./getHighestSectionInStory");
const renumberSections = require("./renumberSections");

/**
 * Returns all sections whos story matches the given id in ascending our, according to their number.
 * Automatically renumbers sections.
 * @param {string} storyId
 */
const getStorySections = async storyId => {
  await renumberSections(storyId);
  const sections = await Section.find({ story: storyId }).sort("number");

  console.log(sections);

  if (sections) {
    const sectionInstances = sections.map(section => {
      return section.returnSectionInstance();
    });
    return sectionInstances;
  }
};

module.exports = getStorySections;
