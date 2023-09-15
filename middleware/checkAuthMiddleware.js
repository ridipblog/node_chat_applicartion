const express = require("express");
const app = express();

// const checkAuth = async (req, res, next) => {
//   console.log("Middleware Running");
//   if (req.isAuthenticated()) {
//     req.message = "Authticate";
//   } else {
//     req.message = "Unautorized";
//   }
//   next();
// };

const checkAuth = async (req, res, next) => {
  if (req.cookies.token) {
    next();
  } else {
    res.redirect("/");
  }
};
const checkIsLogin = async (req, res, next) => {
  if (req.cookies.token) {
    res.redirect("/profile");
  } else {
    next();
  }
};
module.exports = {
  checkAuth,
  checkIsLogin,
};
