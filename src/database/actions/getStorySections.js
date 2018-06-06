const Section = require("../schema/Section");
const getHighestSectionInStory = require("../actions/getHighestSectionInStory");
const renumberSections = require("../actions/renumberSections");
const getStorySections = async storyId => {
  // const sectionMeta = await getHighestSectionInStory(storyId);
  // if (
  //   sectionMeta.lowest !== 0 ||
  //   sectionMeta.highest > sectionMeta.length - 1
  // ) {
  //   console.log("Sections numbering out of sync, renumbering");
  //   await renumberSections(storyId);
  // }
  await renumberSections(storyId);
  const sections = await Section.find({ story: storyId }).sort("number");

  if (sections) {
    return sections;
  }
};

module.exports = getStorySections;
