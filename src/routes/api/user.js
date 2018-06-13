"use strict";

const addUser = require("../../database/actions/addUser");
const getUserByName = require("../../database/actions/getUserByName");
const createWebtoken = require("../../utility/createWebtoken");

const addNewUser = async (req, res) => {
  try {
    if (req.body.isGuest === true) {
      const rawGuestUser = await addUser(
        req.body.username,
        req.body.password,
        req.body.isGuest
      );
      const guestUser = rawGuestUser.returnUserInstance();
      const guestToken = createWebtoken(guestUser);

      res.status(200).json({
        message: "New Guest User added",
        token: guestToken,
        user: guestUser
      });
    } else {
      const existingUser = await getUserByName(req.body.username);
      if (!existingUser) {
        await addUser(req.body.username, req.body.password, res.body.isGuest);

        res.status(200).json({
          message: "New Standard User added"
        });
      } else {
        res.status(409).json({
          message: "User Already Exists"
        });
      }
    }
  } catch (e) {
    console.log("Error adding user::", e);
    res.json(e);
  }
};

module.exports = {
  addNewUser
};
