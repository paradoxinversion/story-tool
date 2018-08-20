const Character = require("../../schema/Character");

const deleteCharacter = async characterId => {
  try {
    const character = await Character.findOneAndRemove({ _id: characterId });
    return character;
  } catch (e) {
    throw e;
  }
};

module.exports = deleteCharacter;
