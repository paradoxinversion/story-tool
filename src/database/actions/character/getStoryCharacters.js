const Character = require("../../schema/Character");

/**
 * Returns all characters who's 'stories' collection contains this supplied story id.
 * @param {*} userId
 * @param {*} storyId
 */
const getStoryCharacters = async (userId, storyId) => {
  try {
    console.log(storyId);
    const characters = await Character.find({
      user: userId,
      stories: { $in: { _id: storyId } }
    });
    console.log(characters);
    // const storyCharacters = characters.filter(character => {
    //   if (character.stories.includes(storyId)) {
    //     return true;
    //   }
    //   return false;
    // });
    // console.log("Story Chars:", storyCharacters);
    // const characterInstances = storyCharacters.map(character => {
    //   return character.returnCharacterInstance();
    // });
    const characterInstances = characters.map(character => {
      return character.returnCharacterInstance();
    });
    return characterInstances;
  } catch (e) {
    throw e;
  }
};

module.exports = getStoryCharacters;
