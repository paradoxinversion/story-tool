import axiosInstance from "../../axiosInstance";
import store from "store";
const getUserStories = async userId => {
  console.log(`Bearer ${store.get("token").token}`);
  const result = await axiosInstance.get(`/user/stories?userId=${userId}`, {
    headers: { Authorization: `Bearer ${store.get("token").token}` }
  });
  return result;
};

export default getUserStories;
