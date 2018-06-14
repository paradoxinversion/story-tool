"use strict";

const express = require("express");
const passport = require("passport");
const jwt = require("express-jwt");
const router = express.Router();
const auth = require("./api/auth");
const userController = require("./api/user");
const storyController = require("./api/story");

router.post("/auth/sign-up", userController.addNewUser);
router.post("/auth/log-in", passport.authenticate("local"), auth.loggedIn);
router.get("/auth/check-token", auth.checkToken);
router
  .route("/user")
  .delete(
    jwt({ secret: process.env.JWT_SECRET || "dEvMoDe!1" }),
    userController.deleteUser
  )
  .put(
    jwt({ secret: process.env.JWT_SECRET || "dEvMoDe!1" }),
    userController.updateUser
  );
router
  .route("/user/stories")
  .get(
    jwt({ secret: process.env.JWT_SECRET || "dEvMoDe!1" }),
    storyController.getUserStories
  );

router
  .route("/stories/:storyId")
  .get(
    jwt({ secret: process.env.JWT_SECRET || "dEvMoDe!1" }),
    storyController.getStoryByStoryId
  )
  .delete(
    jwt({ secret: process.env.JWT_SECRET || "dEvMoDe!1" }),
    storyController.deleteStory
  );

router
  .route("/stories/:storyId/new-section")
  .post(
    jwt({ secret: process.env.JWT_SECRET || "dEvMoDe!1" }),
    storyController.createNewStorySection
  );

router
  .route("/stories/:storyId/sections")
  .get(
    jwt({ secret: process.env.JWT_SECRET || "dEvMoDe!1" }),
    storyController.getAllStorySections
  );

router
  .route("/stories/:storyId/:sectionId")
  .get(
    jwt({ secret: process.env.JWT_SECRET || "dEvMoDe!1" }),
    storyController.getSingleStorySection
  )
  .put(
    jwt({ secret: process.env.JWT_SECRET || "dEvMoDe!1" }),
    storyController.editStorySection
  )
  .delete(
    jwt({ secret: process.env.JWT_SECRET || "dEvMoDe!1" }),
    storyController.deleteStorySection
  );

router
  .route("/stories/:storyId/:sectionId/move")
  .get(
    jwt({ secret: process.env.JWT_SECRET || "dEvMoDe!1" }),
    storyController.moveStoryPart
  );
router
  .route("/stories/new")
  .post(
    jwt({ secret: process.env.JWT_SECRET || "dEvMoDe!1" }),
    storyController.createStory
  );

module.exports = router;
