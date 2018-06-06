import axios from "axios";

const createStory = async (title, synopsis, userId) => {
  try {
    const result = await axios.post("http://localhost:3001/api/stories/new", {
      title,
      synopsis,
      userId
    });
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default createStory;
