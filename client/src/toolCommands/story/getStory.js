import axiosInstance from "../../axiosInstance";
import store from "store";

const getStory = async storyId => {
  try {
    const result = await axiosInstance.get(`/stories/${storyId}`, {
      headers: { Authorization: `Bearer ${store.get("token").token}` }
    });
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default getStory;
