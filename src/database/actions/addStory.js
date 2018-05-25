const Story = require("../schema/Story");
const User = require("../schema/User");
const addStory = async (title, synopsis, userId) => {
  console.log("Adding story with info (title, synopsis):: ", title, synopsis);
  try {
    const user = await User.findOne({ _id: userId });
    const newStory = new Story({
      author: userId,
      title,
      synopsis
    });

    await newStory.save();

    user.stories.push(newStory);
    await user.save();
    return newStory;
  } catch (e) {
    console.log(e);
  }
};

module.exports = addStory;
