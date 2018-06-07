const jwt = require("jsonwebtoken");

const readWebtoken = token => {
  const token = jwt.verify(token, process.env.JWT_SECRET || "dEvMoDe!1");
  return token;
};

module.exports = readWebtoken;
