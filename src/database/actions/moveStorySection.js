"use strict";

const getStorySection = require("../actions/getStorySection");
const getStorySections = require("../actions/getStorySections");
const getHighestSectionInStory = require("../actions/getHighestSectionInStory");
const renumberSections = require("../actions/renumberSections");
const Section = require("../schema/Section");

/**
 * Attempts to trade the section with the supplied sectionId with the section incrementally before or after it
 * @param {string} storyId
 * @param {string} sectionId
 * @param {bool} makeLater
 */
const moveStorySection = async (storyId, sectionId, makeLater) => {
  try {
    const movingSection = await Section.findOne({ _id: sectionId });
    const allSections = await Section.find({ story: storyId }).sort("number");
    // ! FIXME: "true" should be a boolean, not a string
    if (makeLater === "true") {
      if (movingSection.number < allSections.length - 1) {
        const tradingSection = allSections[movingSection.number + 1];
        [movingSection.number, tradingSection.number] = [
          tradingSection.number,
          movingSection.number
        ];
        await movingSection.save();
        await tradingSection.save();
      } else {
        console.log("Part is already at the end");
      }
    } else {
      if (movingSection.number > 0) {
        const tradingSection = allSections[movingSection.number - 1];
        [movingSection.number, tradingSection.number] = [
          tradingSection.number,
          movingSection.number
        ];
        await movingSection.save();
        await tradingSection.save();
      } else {
        console.log("Part is already at the bottom");
      }
    }
    const updatedSections = await Section.find({ story: storyId }).sort(
      "number"
    );
    return updatedSections;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
module.exports = moveStorySection;
