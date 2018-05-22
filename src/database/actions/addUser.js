const bcrypt = require("bcrypt");
const User = require("../schema/User");

const addUser = async (username, password) => {
  try {
    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      password: hashedPass
    });

    await newUser.save();
    return newUser;
  } catch (e) {
    console.log(e);
  }
};

module.exports = addUser;
