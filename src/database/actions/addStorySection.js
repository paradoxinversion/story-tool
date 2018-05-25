const Story = require("../schema/Story");
const StorySection = require("../schema/Section");
const addStory = async (name, content, storyId) => {
  console.log("Adding story with info (title, content):: ", title, content);
  try {
    const story = await Story.findOne({ _id: storyId });

    const newStorySection = new StorySection({
      name,
      content,
      number: story.sections.length
    });
    story.sections.push(newStorySection);

    await story.save();
    return newStorySection;
  } catch (e) {
    console.log(e);
  }
};

module.exports = addStory;
