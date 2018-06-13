import axiosInstance from "../../axiosInstance";

const checkToken = async token => {
  const tokenResult = await axiosInstance.get(
    `/auth/check-token?token=${token}`
  );
  return tokenResult;
};

export default checkToken;
