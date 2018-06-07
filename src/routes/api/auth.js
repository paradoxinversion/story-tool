"use strict";

const passport = require("passport");
const getUserStories = require("../../database/actions/getUserStories");
const createWebtoken = require("../../utility/createWebtoken");

const loggedIn = async (req, res) => {
  const stories = await getUserStories(req.user._id);
  const user = req.user.returnUserInstance();
  console.log(user);
  const token = createWebtoken(user);
  res.status(200).json({
    message: "Log In Successful",
    user,
    token
  });
};

const isAuthenticated = (req, res) => {
  res.status(200).json({
    message: "Log In Successful",
    user: req.user.returnUserInstance()
  });
};

const logOut = (req, res) => {
  res.status(200).json({
    message: "Log out successful"
  });
};
module.exports = { loggedIn, logOut };
