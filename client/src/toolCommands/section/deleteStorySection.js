import axios from "axios";

const deleteStorySection = async (storyId, sectionId) => {
  const result = await axios.delete(
    `http://localhost:3001/api/stories/${storyId}/${sectionId}`
  );
  return result;
};

export default deleteStorySection;
