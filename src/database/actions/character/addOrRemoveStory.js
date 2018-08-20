const Character = require("../../schema/Character");
/**
 * Adds or removes a story (id) that this character is in.
 * @param {*} characterId
 * @param {*} storyId
 * @param {*} add
 */
const addOrRemoveStory = async (characterId, storyId, add) => {
  const character = await Character.findOne({ _id: characterId });
  if (add) {
    character.stories.push(storyId);
  } else {
    character.stories.id(storyId).remove();
  }
  return character;
};

module.exports = addOrRemoveStory;
