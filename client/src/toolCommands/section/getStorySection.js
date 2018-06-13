import axiosInstance from "../../axiosInstance";
import store from "store";
const getStorySection = async (storyId, sectionId) => {
  try {
    const result = await axiosInstance.get(`/stories/${storyId}/${sectionId}`, {
      headers: { Authorization: `Bearer ${store.get("storytool").token}` }
    });

    return result;
  } catch (e) {
    console.log(e);
  }
};

export default getStorySection;
