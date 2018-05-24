const User = require("../schema/User");

const getUserByName = async username => {
  const user = await User.findOne({ username }).populate("stories");
  if (user) {
    return user;
  }
};

module.exports = getUserByName;
