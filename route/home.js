const express = require("express");
const app = express();
const hbs = require("hbs");
const bodyParser = require("body-parser");
const encoded = bodyParser.urlencoded({ extended: true });
app.set("view engine", "hbs");
app.get("/", async (req, res) => {
  res.render("home");
});

module.exports = app;
