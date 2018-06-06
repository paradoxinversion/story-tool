const Section = require("../schema/Section");

/**
 * Renumbers all sections from 0 to the total amount of sections in a story.
 * @param {string} storyId
 */
const renumberSections = async storyId => {
  const sections = await Section.find({ story: storyId }).sort("number");
  sections.forEach(async (section, index) => {
    section.number = index;
    await section.save();
  });
};

module.exports = renumberSections;
