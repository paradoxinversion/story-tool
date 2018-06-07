import axios from "axios";
import store from "store";

const deleteStory = async storyId => {
  const result = await axios.delete(
    `http://localhost:3001/api/stories/${storyId}`,
    { headers: { Authorization: `Bearer ${store.get("token").token}` } }
  );
  return result;
};

export default deleteStory;
