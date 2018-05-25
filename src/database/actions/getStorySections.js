const Section = require("../schema/Section");

const getStorySections = async storyId => {
  const sections = await Section.find({ _id: storyId });
  if (sections) {
    console.log(sections);
    return sections;
  }
};

module.exports = getStorySections;
