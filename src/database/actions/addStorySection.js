const Story = require("../schema/Story");
const StorySection = require("../schema/Section");

/**
 * Creates a section associated with a story
 * @param {string} name The name of the story section
 * @param {string} content The text content of the section
 * @param {string} storyId The Id of the story the section belongs to
 */
const addStorySection = async (name, content, storyId) => {
  try {
    const story = await Story.findOne({ _id: storyId });

    const newStorySection = new StorySection({
      name,
      content,
      number: story.sections.length,
      story: storyId
    });
    await newStorySection.save();
    story.sections.push(newStorySection);

    await story.save();
    return newStorySection;
  } catch (e) {
    console.log(e);
  }
};

module.exports = addStorySection;
