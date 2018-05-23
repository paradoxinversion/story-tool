const User = require("../schema/User");

const getUserByName = async username => {
  const user = await User.findOne({ username });
  if (user) {
    return user;
  }
};

module.exports = getUserByName;
