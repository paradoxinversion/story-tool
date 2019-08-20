"use strict";

const addUser = require("../../database/actions/user/addUser");
const getUserByName = require("../../database/actions/user/getUserByName");
const _deleteUser = require("../../database/actions/user/deleteUser");
const _updateUser = require("../../database/actions/user/updateUser");
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
    if (!req.body.username || !req.body.password) {
      const error = new Error("Requires username and password");
      throw error;
    }
    if (req.body.isGuest === true) {
      const rawGuestUser = await addUser(
        req.body.username,
        req.body.password,
        req.body.isGuest
      );
      const user = rawGuestUser.returnUserInstance();
      const token = createWebtoken(user);

      res.status(200).json({
        message: "New Guest User added",
        token,
        user
      });
    } else {
      const existingUser = await getUserByName(req.body.username);
      if (!existingUser) {
        const rawNewUser = await addUser(
          req.body.username,
          req.body.password,
          req.body.isGuest
        );
        const user = rawNewUser.returnUserInstance();
        const token = createWebtoken(user);

        res.status(201).json({
          message: "New Standard User added",
          user,
          token
        });
      } else {
        res.status(409).json({
          message: "User Already Exists",
          user: null,
          token: null
        });
      }
    }
  } catch (e) {
    console.log("Error adding user::", e);
    console.log("ARG");
    res.status(400).json({ error: e.message });
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
