const express = require("express");
const passport = require("passport");
const session = require("express-session");
const googleStrategy = require("passport-github");
const UsefullMethod = require("../controllers/UsefullMethodController");
const checkAuthMiddle = require("../middleware/checkAuthMiddleware");
const app = express();
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);
passport.use(
  new googleStrategy(
    {
      //   clientID:
      //     "784573559341-mm6nd9pmtd41f8t9l0j9vpqgjuh65q3j.apps.googleusercontent.com",
      //   clientSecret: "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",
      //   callbackURL: "/auth/google/callback",
      clientID: "42a4b064b590d6d048d9",
      clientSecret: "53718da607c715fb6e35ec0f597c5bdce24d8d52",
      callbackURL: "/auth/github/callback",
    },
    (accessToken, refreshToekn, profile, done) => {
      const email = profile.emails ? profile.emails[0].value : null;
      console.log(email);
      return done(null, profile);
    }
  )
);
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});
app.use(passport.initialize());
// app.use(passport.session());
app.get(
  "/auth/github",
  //   checkAuthMiddle.checkIsLogin,
  passport.authenticate("github", {
    scope: ["profile", "email"],
  })
);
app.get(
  "/auth/github/callback",
  //   checkAuthMiddle.checkIsLogin,
  passport.authenticate("github", {
    failureRedirect: "/",
  }),
  async (req, res, next) => {
    // console.log(req.user, req.isAuthenticated());
    console.log(req.user);
    // const token = await UsefullMethod.generateToekn(req.user.displayName);
    // res.cookie("token", token);
    res.send("Ok");
    // res.redirect("/home");
  }
);
app.get("/home", (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log(req.user);
    console.log(req.user.emails[0].value);
    res.send("Your Are Loged In");
    // res.redirect("/home");
  } else {
    res.send("Index Page");
  }
});
module.exports = app;
