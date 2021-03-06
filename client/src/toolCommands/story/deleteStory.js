import axiosInstance from "../../axiosInstance";
import store from "store";

const deleteStory = async storyId => {
  const result = await axiosInstance.delete(`/stories/${storyId}`, {
    headers: { Authorization: `Bearer ${store.get("storytool").token}` }
  });
  return result;
};

export default deleteStory;
