"use strict";

const addUser = require("../../database/actions/addUser");
const getUserByName = require("../../database/actions/getUserByName");

const addNewUser = async (req, res) => {
  try {
    const existingUser = await getUserByName(req.body.username);
    if (!existingUser) {
      await addUser(req.body.username, req.body.password);

      res.status(200).json({
        message: "User added"
      });
    } else {
    }
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

module.exports = {
  addNewUser
};
