const User = require("../schema/User");

const deleteUser = async userId => {
  try {
    console.log("Deleting User", userId);
    const user = await User.deleteOne({ _id: userId });
    console.log("deletion result", user);
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
