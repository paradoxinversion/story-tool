const Story = require("../schema/Story");
const getStoryById = async userId => {
  try {
    const stories = await Story.findOne({ author: userId });
    return stories;
  } catch (e) {
    console.log(e);
  }
};

module.exports = getStoryById;
