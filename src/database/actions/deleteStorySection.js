const Section = require("../schema/Section");

const deleteStorySection = async sectionId => {
  const section = await Section.deleteOne({ _id: sectionId });
  return section;
};

module.exports = deleteStorySection;
