import axiosInstance from "../../axiosInstance";

const attemptUserLogIn = async (username, password) => {
  try {
    const result = await axiosInstance.post(
      "/auth/log-in",
      {
        username,
        password
      },
      {
        validateStatus: function(status) {
          return (status >= 200 && status < 300) || status === 401;
        }
      }
    );
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default attemptUserLogIn;
