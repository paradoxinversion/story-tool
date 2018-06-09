import axiosInstance from "../../axiosInstance";
import store from "store";

const moveSection = async (storyId, sectionId, up) => {
  const result = await axiosInstance.get(
    `/stories/${storyId}/${sectionId}/move?up=${up}`,
    {
      headers: {
        Authorization: `Bearer ${store.get("token").token}`
      }
    }
  );
  return result;
};

export default moveSection;
