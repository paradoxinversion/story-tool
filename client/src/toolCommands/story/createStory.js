import axios from "axios";
import store from "store";

const createStory = async (title, synopsis, userId) => {
  try {
    const result = await axios.post(
      "http://localhost:3001/api/stories/new",
      {
        title,
        synopsis,
        userId
      },
      { headers: { Authorization: `Bearer ${store.get("token").token}` } }
    );
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default createStory;
