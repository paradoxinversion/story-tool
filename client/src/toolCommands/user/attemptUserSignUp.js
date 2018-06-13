import axiosInstance from "../../axiosInstance";

const attemptUserSignUp = async (name, password, isGuest) => {
  try {
    const result = await axiosInstance.post(
      "/auth/sign-up",
      {
        username: name,
        password: password,
        isGuest
      },
      {
        validateStatus: function(status) {
          return (status >= 200 && status < 300) || status === 409;
        }
      }
    );
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default attemptUserSignUp;
