const express = require("express");
const router = express.Router();
const passport = require("passport");
const auth = require("./api/auth");
const userController = require("./api/user");
const storyController = require("./api/story");
router.get("/api", (req, res) => {
  res.send("Derp");
});
router.route("/api/auth/sign-up").post(userController.addNewUser);

router
  .route("/api/auth/log-in")
  .post(passport.authenticate("local"), auth.loggedIn);

router.route("/api/stories/:storyId").get(storyController.getStoryByStoryId);
router
  .route("/api/stories/:storyId/new-story")
  .get(storyController.createNewStorySection);
router.route("/api/stories/new").post(storyController.addNewStory);

module.exports = router;
