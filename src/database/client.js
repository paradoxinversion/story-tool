const mongoose = require("mongoose");

const startClient = async () => {
  await mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/storytool-dev"
  );
};

module.exports = startClient;
