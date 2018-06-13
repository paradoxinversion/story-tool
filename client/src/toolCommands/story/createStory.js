import axiosInstance from "../../axiosInstance";
import store from "store";

const createStory = async (title, synopsis, userId) => {
  try {
    const result = await axiosInstance.post(
      "/stories/new",
      {
        title,
        synopsis,
        userId
      },
      { headers: { Authorization: `Bearer ${store.get("storytool").token}` } }
    );
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default createStory;
