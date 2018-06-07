import axios from "axios";
import store from "store";
const deleteStorySection = async (storyId, sectionId) => {
  const result = await axios.delete(
    `http://localhost:3001/api/stories/${storyId}/${sectionId}`,
    { headers: { Authorization: `Bearer ${store.get("token").token}` } }
  );
  return result;
};

export default deleteStorySection;
