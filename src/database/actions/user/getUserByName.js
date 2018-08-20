"use strict";

const User = require("../../schema/User");

/**
 * Returns a user by the supplied username, if one exist.
 * @param {string} username
 */
const getUserByName = async username => {
  const user = await User.findOne({ username }).populate("stories");
  if (user) {
    return user;
  }
};

module.exports = getUserByName;
