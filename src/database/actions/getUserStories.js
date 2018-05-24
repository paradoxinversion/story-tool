const Story = require("../schema/Story");

const getUserStories = async userId => {
  const stories = await Story.find({ author: userId });
  if (stories) {
    console.log(stories);
    return stories;
  }
};

module.exports = getUserStories;
