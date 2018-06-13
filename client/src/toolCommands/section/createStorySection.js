import axiosInstance from "../../axiosInstance";
import store from "store";

const createStorySection = async (name, content, storyId) => {
  try {
    const result = await axiosInstance.post(
      `/stories/${storyId}/new-section`,
      {
        name,
        content,
        storyId
      },
      { headers: { Authorization: `Bearer ${store.get("storytool").token}` } }
    );
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default createStorySection;
