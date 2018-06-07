import axios from "axios";
import store from "store";
const getUserStories = async userId => {
  console.log(`Bearer ${store.get("token").token}`);
  const result = await axios.get(
    `http://localhost:3001/api/user/stories?userId=${userId}`,
    {
      headers: { Authorization: `Bearer ${store.get("token").token}` }
    }
  );
  return result;
};

export default getUserStories;
