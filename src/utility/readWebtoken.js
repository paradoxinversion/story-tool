const jwt = require("jsonwebtoken");

const readWebtoken = token => {
  const user = jwt.verify(token, process.env.JWT_SECRET || "dEvMoDe!1");
  return user;
};

module.exports = readWebtoken;
