const User = require("../schema/User");
const bcrypt = require("bcrypt");
const updateUser = async (originalUsername, username, password) => {
  console.log(originalUsername, username, password);
  try {
    if (password !== "") {
      const hashedPass = await bcrypt.hash(password, 10);
      const userUpdate = await User.findOneAndUpdate(
        { username: originalUsername.toString() },
        { username, password: hashedPass },
        { new: true }
      );
      console.log("UserUpdate::", userUpdate);
      const userInstance = userUpdate.returnUserInstance();
      return userInstance;
    } else {
      const userUpdate = await User.findOneAndUpdate(
        { username: originalUsername.toString() },
        { username },
        { new: true }
      );
      console.log("UserUpdate::", userUpdate);

      const userInstance = userUpdate.returnUserInstance();
      return userInstance;
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = updateUser;
