const Character = require("../../schema/Character");

const updateCharacter = async (characterId, characterUpdate) => {
  try {
    const character = await Character.findOne({ _id: characterId });
    if (characterUpdate.name !== "") {
      character.name = characterUpdate.name;
    }
    if (characterUpdate.age !== "") {
      character.age = characterUpdate.age;
    }
    if (character.isMain) {
      character.isMainCharacter = characterUpdate.isMainCharacter;
    }
    await character.save();
    return character.returnCharacterInstance();
  } catch (e) {
    throw e;
  }
};

module.exports = updateCharacter;
