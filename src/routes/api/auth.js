"use strict";

const getUserStories = require("../../database/actions/getUserStories");
const createWebtoken = require("../../utility/createWebtoken");
const readWebToken = require("../../utility/readWebtoken");
const User = require("../../database/schema/User");
const loggedIn = async (req, res) => {
  const stories = await getUserStories(req.user._id);
  const user = req.user.returnUserInstance();
  const token = createWebtoken(user);
  res.status(200).json({
    message: "Log In Successful",
    user,
    token
  });
};

const checkToken = async (req, res) => {
  const user = readWebToken(req.query.token);
  console.log(user.user.id);
  const userRecord = await User.findOne({ _id: user.user.id });
  console.log(userRecord);
  if (userRecord) {
    res.status(200).json({
      message: "Authorization OK",
      user: user
    });
  } else {
    res.status(401).json({
      message: "Not Authorized"
    });
  }
};

module.exports = { loggedIn, checkToken };
