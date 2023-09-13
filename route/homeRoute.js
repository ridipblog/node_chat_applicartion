const router = require("express").Router();
// const app = express();
const hbs = require("hbs");
const bodyParser = require("body-parser");
const encoded = bodyParser.urlencoded({ extended: true });
const homeController = require("../controllers/HomeController");
const { route } = require("./login");
router.get("/", homeController.indexHome);

module.exports = router;
