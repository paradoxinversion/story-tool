import axiosInstance from "../../axiosInstance";
import store from "store";
const getStorySections = async workingStoryId => {
  try {
    const result = await axiosInstance.get(
      `/stories/${workingStoryId}/sections`,
      { headers: { Authorization: `Bearer ${store.get("storytool").token}` } }
    );
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default getStorySections;
