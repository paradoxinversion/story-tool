import axiosInstance from "../../axiosInstance";

const attemptUserLogOut = async () => {
  try {
    const result = await axiosInstance.get(
      "http://localhost:3000/api/auth/log-out"
    );
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default attemptUserLogOut;
