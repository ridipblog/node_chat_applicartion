const db = require("../models/index");
const UsefullMethod = require("./UsefullMethodController");
const User = db.users;
const storeRegistration = async (req, res) => {
  // const user_data = await req.body;
  // console.log(user_data);
  // res.redirect("/");
  var message = {
    message: req.body,
  };
  res.status(200).send(message);
};
module.exports = {
  storeRegistration,
};
