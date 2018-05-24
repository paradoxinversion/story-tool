const Story = require("../schema/Story");
const getStoryById = async storyId => {
  try {
    const story = await Story.findOne({ _id: storyId });
    return story;
  } catch (e) {
    console.log(e);
  }
};

module.exports = getStoryById;
