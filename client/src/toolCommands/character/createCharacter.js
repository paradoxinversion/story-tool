import axiosInstance from "../../axiosInstance";
import store from "store";

const createCharacter = async (character, storyId) => {
  try {
    const result = await axiosInstance.post(
      `/characters`,
      {
        character,
        storyId
      },
      { headers: { Authorization: `Bearer ${store.get("storytool").token}` } }
    );
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default createCharacter;
