const indexHome = async (req, res) => {
  // console.log(req.user);
  console.log(req.message);
  res.render("home");
};
module.exports = {
  indexHome,
};
