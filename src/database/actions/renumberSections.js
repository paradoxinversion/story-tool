const Section = require("../schema/Section");

const renumberSections = async storyId => {
  const sections = await Section.find({ story: storyId }).sort("number");
  sections.forEach(async (section, index) => {
    section.number = index;
    await section.save();
  });
};

module.exports = renumberSections;
