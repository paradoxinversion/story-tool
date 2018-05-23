const express = require("express");
const router = express.Router();
const passport = require("passport");
const addUser = require("../database/actions/addUser");
const auth = require("./api/auth");
const userController = require("./api/user");
router.get("/api", (req, res) => {
  res.send("Derp");
});

router
  .route("/api/auth/log-in")
  .post(passport.authenticate("local"), auth.loggedIn);
module.exports = router;
router.route("/api/auth/sign-up").post(userController.addNewUser);
