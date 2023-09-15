const jwt = require("jsonwebtoken");
const secret_key = "dshdjsh1212";
const generateToekn = async (email) => {
  var token = await jwt.sign({ email: email }, secret_key);
  return token;
};
async function subGenerateToken(email) {}
module.exports = {
  generateToekn,
};
