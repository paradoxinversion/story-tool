const path = require("path");
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongooseClient = require("./database/client");
const getUserByName = require("./database/actions/getUserByName");
const app = express();

const User = require("./database/schema/User");

app.use(logger("dev"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, "public")));

passport.use(
  new LocalStrategy(async function(username, password, done) {
    // User.findOne({ username: username }, function(err, user) {
    //   if (err) {
    //     return done(err);
    //   }
    //   if (!user) {
    //     return done(null, false);
    //   }
    //   if (!user.verifyPassword(password)) {
    //     return done(null, false);
    //   }
    //   return done(null, user);
    // });
    try {
      const user = await getUserByName(username);
      if (!user) return done(null, false);
      if (!user.verifyPassword(password)) return done(null, false);
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
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
//   next();
// });
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", index);

app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.status);
});

app.listen(3001, () => console.log("Example app listening on port 3001!"));
