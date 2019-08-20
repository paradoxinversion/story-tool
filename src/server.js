const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongooseClient = require("./database/client");
const getUserByName = require("./database/actions/user/getUserByName");
const User = require("./database/schema/User");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(logger("dev"));
  server.use(cookieParser());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.use(passport.initialize());
  server.use(passport.session());
  // server.use(express.static(path.join(__dirname, "public")));

  passport.use(
    new LocalStrategy(async function(username, password, done) {
      try {
        const user = await getUserByName(username);
        if (!user) return done(null, false);
        const passwordVerified = await user.verifyPassword(password);
        if (!passwordVerified) return done(null, false);
        return done(null, user);
      } catch (e) {
        return done(e);
      }
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
  mongooseClient();
  const index = require("./routes/index");

  // server.use(function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header(
  //     "Access-Control-Allow-Headers",
  //     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  //   );
  //   res.header("Access-Control-Allow-Credentials", true);
  //   res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  //   next();
  // });

  server.use("/api", index);
  server.get("*", (req, res) => {
    return handle(req, res);
  });
  // if (process.env.NODE_ENV === "production") {
  //   server.use("/", express.static(path.resolve(__dirname, "..", "dist")));
  //   server.get("*", function(req, res) {
  //     res.sendFile(path.resolve(__dirname, "..", "dist/index.html"));
  //   });
  // }

  server.use(function(req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
  });

  server.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.status);
  });

  server.listen(process.env.PORT || 3000, () =>
    console.log("StoryTool Server Started")
  );
});
