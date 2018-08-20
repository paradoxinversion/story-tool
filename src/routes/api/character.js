"use strict";
const actions = require("../../database/actions/index");

const createCharacter = async (req, res) => {
  try {
    console.log(req.user);
    console.log(req.body);
    const newCharacter = await actions.character.createCharacter(
      req.body.character,
      req.user.user.id,
      req.body.storyId
    );
    res.status(200).json({
      message: "Character added",
      newCharacter
    });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

const deleteCharacter = async (req, res) => {
  try {
    const deletionResult = await actions.character.deleteCharacter(
      req.body.characterId
    );
    res.status(200).json({
      message: "Character Deleted",
      deletionResult
    });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

const updateCharacter = async (req, res) => {
  try {
    const updatedCharacter = await actions.character.updateCharacter(
      req.body.characterId,
      req.body.characterUpdate
    );
    res.status(200).json({
      message: "Character Updated",
      updatedCharacter
    });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

const getCharacters = async (req, res) => {
  try {
    let characters;
    // if (req.query.story) {
    //   characters = await actions.character.getStoryCharacters(
    //     req.user.user.id,
    //     req.query.story
    //   );
    // } else {
    //   characters = await actions.character.getUserCharacters(req.user.user.id);
    // }
    characters = await actions.character.getUserCharacters(req.user.user.id);
    res.status(200).json({
      message: "Got Characters",
      characters
    });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
module.exports = {
  createCharacter,
  updateCharacter,
  deleteCharacter,
  getCharacters
};
