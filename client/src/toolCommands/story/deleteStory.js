import axios from "axios";

const deleteStory = async storyId => {
  const result = await axios.delete(
    `http://localhost:3001/api/stories/${storyId}`
  );
  return result;
};

export default deleteStory;
