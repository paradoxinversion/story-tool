const jwt = require("jsonwebtoken");

const createWebToken = user => {
  const token = jwt.sign({ user }, process.env.JWT_SECRET || "dEvMoDe!1");
  return token;
};

module.exports = createWebToken;
