const Character = require("../../schema/Character");

const getUserCharacters = async userId => {
  try {
    const characters = await Character.find({ user: userId });
    console.log(characters);
    const characterInstances = characters.map(character => {
      return character.returnCharacterInstance();
    });
    return characterInstances;
  } catch (e) {
    throw e;
  }
};

module.exports = getUserCharacters;
