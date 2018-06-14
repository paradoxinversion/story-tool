"use strict";

const addUser = require("../../database/actions/addUser");
const getUserByName = require("../../database/actions/getUserByName");
const _deleteUser = require("../../database/actions/deleteUser");
const _updateUser = require("../../database/actions/updateUser");
const createWebtoken = require("../../utility/createWebtoken");

const deleteUser = async (req, res) => {
  try {
    console.log("USER", req.user);
    const userDelete = _deleteUser(req.user.user.id);
    if (userDelete === true) {
      res.status(200).json({
        message: "User Deleted"
      });
    } else {
      res.status(200).json({
        message: "No user was found to delete"
      });
    }
  } catch (e) {
    res.status(200).json({
      message: e.message
    });
  }
};

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
        await addUser(req.body.username, req.body.password, req.body.isGuest);

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

const updateUser = async (req, res) => {
  try {
    const userUpdate = await _updateUser(
      req.user.user.username,
      req.body.username,
      req.body.password
    );
    res.status(200).json({
      message: "User updated",
      user: userUpdate
    });
  } catch (e) {
    res.json(e);
  }
};

module.exports = {
  addNewUser,
  deleteUser,
  updateUser
};
