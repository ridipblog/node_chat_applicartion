const express = require("express");
const app = express();
// const hbs = require("hbs");
// const bodyParser = require("body-parser");
// const encoded = bodyParser.urlencoded({ extended: true });
// app.set("view engine", "hbs");
const login = require("./route/login");
const home = require("./route/home");
app.use("/public", express.static("public"));
app.use("/", login);
app.use("/", home);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server Running");
});
