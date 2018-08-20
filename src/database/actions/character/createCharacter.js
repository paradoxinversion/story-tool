const Character = require("../../schema/Character");

const createCharacter = async (character, userId, storyId) => {
  try {
    const newCharacter = new Character({
      name: character.name,
      age: character.age,
      isMainCharacter: character.isMainCharacter,
      user: userId
    });

    if (storyId) {
      newCharacter.stories.push(storyId);
    }
    await newCharacter.save();
    return newCharacter.returnCharacterInstance();
  } catch (e) {
    throw e;
  }
};

module.exports = createCharacter;
