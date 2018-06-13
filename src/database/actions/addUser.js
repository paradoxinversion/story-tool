"use strict";

const bcrypt = require("bcrypt");
const User = require("../schema/User");

/**
 * Creates a new user
 * @param {string} username The user's identifying name
 * @param {string} password The user's plaintext password
 * @param {boolean} isGuest Is the new user starting a guest session?
 */
const addUser = async (username, password, isGuest) => {
  console.log(
    "Adding user with info (username, password, isGuest):: ",
    username,
    password,
    isGuest
  );

  if (isGuest) {
    username =
      Date.now() +
      Math.random()
        .toString()
        .slice(2);
    password = Math.random()
      .toString()
      .slice(2);
  }
  try {
    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      password: hashedPass,
      isGuest
    });

    await newUser.save();
    return newUser;
  } catch (e) {
    console.log(e);
  }
};

module.exports = addUser;
