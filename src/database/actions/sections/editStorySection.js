"use strict";

const Section = require("../../schema/Section");

/**
 *  Edits a story section's name, content or both.
 * @param {string} name The new name of the section
 * @param {string} content The new content. This content replaces previous content.
 * @param {string} sectionId The Id of the section to edit
 */
const editStorySection = async (name, content, sectionId) => {
  const section = await Section.findOne({ _id: sectionId });

  if (section) {
    section.name = name;
    section.content = content;
    section.save();
    const sectionInstance = section.returnSectionInstance();
    return sectionInstance;
  }
};

module.exports = editStorySection;
