"use strict";

const express = require("express");
const router = express.Router();
const passport = require("passport");
const auth = require("./api/auth");
const userController = require("./api/user");
const storyController = require("./api/story");

router.post("/api/auth/sign-up", userController.addNewUser);
router.post("/api/auth/log-in", passport.authenticate("local"), auth.loggedIn);
router.get("/api/auth/log-out", auth.logOut);
router.route("/api/user/stories").get(storyController.getUserStories);

router
  .route("/api/stories/:storyId")
  .get(storyController.getStoryByStoryId)
  .delete(storyController.deleteStory);

router
  .route("/api/stories/:storyId/new-section")
  .post(storyController.createNewStorySection);
router
  .route("/api/stories/:storyId/:sectionId/move")
  .get(storyController.moveStoryPart);
router
  .route("/api/stories/:storyId/sections")
  .get(storyController.getAllStorySections);

router
  .route("/api/stories/:storyId/:sectionId")
  .get(storyController.getSingleStorySection)
  .put(storyController.editStorySection)
  .delete(storyController.deleteStorySection);

router.route("/api/stories/new").post(storyController.addNewStory);

module.exports = router;
