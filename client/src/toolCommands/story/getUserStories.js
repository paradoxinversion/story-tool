import axiosInstance from "../../axiosInstance";
import store from "store";
const getUserStories = async userId => {
  const result = await axiosInstance.get(`/user/stories?userId=${userId}`, {
    headers: { Authorization: `Bearer ${store.get("storytool").token}` }
  });
  return result;
};

export default getUserStories;
