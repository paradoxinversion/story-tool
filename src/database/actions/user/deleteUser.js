const User = require("../../schema/User");

const deleteUser = async userId => {
  try {
    const user = await User.deleteOne({ _id: userId });
    if (user.n === 1) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};

module.exports = deleteUser;
