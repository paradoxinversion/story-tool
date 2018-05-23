const bcrypt = require("bcrypt");
const User = require("../schema/User");

const addUser = async (username, password, isGuest) => {
  console.log(
    "Adding user with info (username, password, isGuest):: ",
    username,
    password,
    isGuest
  );
  console.log(isGuest);
  if (isGuest) {
    username = Math.random();
    password = "trial";
  }
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
