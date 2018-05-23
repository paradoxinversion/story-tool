const passport = require("passport");

const loggedIn = (req, res) => {
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
