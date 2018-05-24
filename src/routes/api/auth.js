const passport = require("passport");
const getUserStories = require("../../database/actions/getUserStories");
const loggedIn = async (req, res) => {
  const stories = await getUserStories(req.user._id);
  res.status(200).json({
    message: "Log In Successful",
    user: req.user.returnUserInstance()
  });
};

const isAuthenticated = (req, res) => {
  res.status(200).json({
    message: "Log In Successful",
    user: req.user.returnUserInstance()
  });
};

module.exports = { loggedIn };
