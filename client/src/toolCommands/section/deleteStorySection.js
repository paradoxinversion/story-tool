import axiosInstance from "../../axiosInstance";
import store from "store";
const deleteStorySection = async (storyId, sectionId) => {
  const result = await axiosInstance.delete(
    `/stories/${storyId}/${sectionId}`,
    { headers: { Authorization: `Bearer ${store.get("token").token}` } }
  );
  return result;
};

export default deleteStorySection;
