const mongoose = require("mongoose");

const databaseURI =
  process.env.MONGODB_URI || "mongodb://localhost/storytool-dev";
module.exports = async function() {
  await mongoose.connect(databaseURI);

  mongoose.connection.on("error", function(err) {
    console.log("Mongoose default connection has occured " + err + " error");
  });

  mongoose.connection.on("disconnected", function() {
    console.log("Mongoose default connection is disconnected");
  });

  process.on("SIGINT", function() {
    mongoose.connection.close(function() {
      console.log(
        "Mongoose default connection is disconnected due to application termination"
      );
      process.exit(0);
    });
  });
};
