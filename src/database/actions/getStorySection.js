const Section = require("../schema/Section");

const getStorySection = async sectionId => {
  const section = await Section.findOne({ _id: sectionId });
  if (section) {
    return section;
  }
};

module.exports = getStorySection;
