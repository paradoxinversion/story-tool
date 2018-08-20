import axiosInstance from "../../axiosInstance";
import store from "store";

// const getStoryCharacters = async storyId => {
//   try {
//     const result = await axiosInstance.get(`/characters?story=${storyId}`, {
//       headers: { Authorization: `Bearer ${store.get("storytool").token}` }
//     });
//     return result;
//   } catch (e) {
//     console.log(e);
//   }
// };
const getStoryCharacters = async (characters, storyId) => {
  const storyCharacters = characters.filter(character => {
    console.log(character);
    console.log(character.stories.includes(storyId));
    if (character.stories.includes(storyId)) {
      return true;
    }
  });
  return storyCharacters;
};
export default getStoryCharacters;
