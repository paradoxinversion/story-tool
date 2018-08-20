import axiosInstance from "../../axiosInstance";
import store from "store";

const getUserCharacters = async () => {
  try {
    const result = await axiosInstance.get(`/characters`, {
      headers: { Authorization: `Bearer ${store.get("storytool").token}` }
    });

    console.log("AS RESULT", result);
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default getUserCharacters;
