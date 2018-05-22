const path = require("path");
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongooseClient = require("./database/client");
const app = express();

// Set middlewares
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongooseClient();
// Set Routes
const index = require("./routes/index");
app.use("/", index);

// Set Error Handling (Should be done after all routes are defined)
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.status);
});

// Start the Server
app.listen(3001, () => console.log("Example app listening on port 3001!"));
