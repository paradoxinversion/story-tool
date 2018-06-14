"use strict";

import axiosInstance from "../../axiosInstance";
import store from "store";
const attemptUserDelete = async userId => {
  try {
    const result = await axiosInstance.delete("/user", {
      headers: { Authorization: `Bearer ${store.get("storytool").token}` },
      validateStatus: function(status) {
        return (status >= 200 && status < 300) || status === 401;
      }
    });
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default attemptUserDelete;
