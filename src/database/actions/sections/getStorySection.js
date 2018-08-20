"use strict";

const Section = require("../../schema/Section");

/**
 * Returns a single story section with the supplied id.
 * @param {string} sectionId
 */
const getStorySection = async sectionId => {
  try {
    const section = await Section.findOne({ _id: sectionId });
    if (section) {
      const sectionInstance = section.returnSectionInstance();
      return sectionInstance;
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = getStorySection;
