const Section = require("../schema/Section");

const editStorySection = async (name, content, sectionId) => {
  const section = await Section.findOne({ _id: sectionId });

  if (section) {
    section.name = name;
    section.content = content;
    section.save();
    return section;
  }
};

module.exports = editStorySection;
