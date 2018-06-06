"use strict";

const Section = require("../schema/Section");

/**
 * Returns a single story section with the supplied id.
 * @param {string} sectionId
 */
const getStorySection = async sectionId => {
  const section = await Section.findOne({ _id: sectionId });
  if (section) {
    return section;
  }
};

module.exports = getStorySection;
