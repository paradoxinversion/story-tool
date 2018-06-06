const Story = require("../schema/Story");

const deleteStory = async storyId => {
  const deletionResult = await Story.deleteOne({ _id: storyId });
  return deletionResult;
};

module.exports = deleteStory;
