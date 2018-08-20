"use strict";

const Section = require("../../schema/Section");

/**
 * Deletes a section of a story
 * @param {string} sectionId The Id of the section to delete
 */
const deleteStorySection = async sectionId => {
  const section = await Section.deleteOne({ _id: sectionId });
  return section;
};

module.exports = deleteStorySection;
