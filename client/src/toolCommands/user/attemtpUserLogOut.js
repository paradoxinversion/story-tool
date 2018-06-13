import axiosInstance from "../../axiosInstance";
import store from "store";
const attemptUserLogOut = async () => {
  try {
    store.remove("storytool");
  } catch (e) {
    console.log(e);
  }
};

export default attemptUserLogOut;
