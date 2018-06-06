const Story = require("../schema/Story");
const StorySection = require("../schema/Section");
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
