const express = require("express");
// const passport = require("passport");
// const session = require("express-session");
// const googleStrategy = require("passport-google-oauth20");
const app = express();

const hbs = require("hbs");
const bodyParser = require("body-parser");
const encoded = bodyParser.urlencoded({ extended: true });
const cookieParser = require("cookie-parser");
app.use(encoded);
app.use(cookieParser());
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Route Section

const login = require("./route/login");
const home = require("./route/homeRoute");
const socialAuth = require("./route/socialAuthRoute");
const socialGithubAuth = require("./route/socialGithubRoute");
const profileRoute = require("./route/profileRoute");
app.use("/public", express.static("public"));
app.use("/", socialAuth);
app.use("/", socialGithubAuth);
app.use("/", login);
app.use("/", home);
app.use("/", profileRoute);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server Running");
});
