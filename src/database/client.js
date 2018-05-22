const mongoose = require("mongoose");

const startClient = async () => {
  await mongoose.connect("mongodb://localhost/storytool-dev");
};

module.exports = startClient;
