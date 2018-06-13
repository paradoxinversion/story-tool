import axiosInstance from "../../axiosInstance";

const checkToken = async token => {
  try {
    const tokenResult = await axiosInstance.get(
      `/auth/check-token?token=${token}`,
      {
        validateStatus: function(status) {
          return (status >= 200 && status < 300) || status === 401;
        }
      }
    );

    return tokenResult;
  } catch (e) {
    console.log("error time?");
    throw e;
  }
};

export default checkToken;
