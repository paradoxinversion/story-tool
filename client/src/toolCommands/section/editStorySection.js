import axiosInstance from "../../axiosInstance";
import store from "store";
const editStorySection = async (storyId, sectionId, name, content) => {
  try {
    const result = await axiosInstance.put(
      `/stories/${storyId}/${sectionId}`,
      {
        name,
        content
      },
      {
        headers: { Authorization: `Bearer ${store.get("token").token}` }
      }
    );

    return result;
  } catch (e) {
    console.log(e);
  }
};

export default editStorySection;
