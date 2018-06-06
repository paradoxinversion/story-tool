import axios from "axios";

const getUserStories = async userId => {
  const result = await axios.get(
    `http://localhost:3001/api/user/stories?userId=${userId}`
  );
  return result;
};

export default getUserStories;
