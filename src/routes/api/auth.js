"use strict";

const getUserStories = require("../../database/actions/getUserStories");
const createWebtoken = require("../../utility/createWebtoken");
const readWebToken = require("../../utility/readWebtoken");
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

const checkToken = (req, res) => {
  const user = readWebToken(req.query.token);
  console.log(user);
  if (user) {
    res.status(200).json({
      message: "Authorization OK",
      user: user
    });
  } else {
    res.status(400).json({
      message: "Not Authorized"
    });
  }
};

module.exports = { loggedIn, checkToken };
