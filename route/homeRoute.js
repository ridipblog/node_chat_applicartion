const router = require("express").Router();
// const app = express();
// const hbs = require("hbs");
const bodyParser = require("body-parser");
const encoded = bodyParser.urlencoded({ extended: true });

// Middleware Section

const checkAuth = require("../middleware/checkAuthMiddleware");

// Controller Section

const homeController = require("../controllers/HomeController");
const RegistrationController = require("../controllers/RegistrationController");
const checkAuthMiddle = require("../middleware/checkAuthMiddleware");
router.get("/", checkAuthMiddle.checkIsLogin, homeController.indexHome);
router.post("/registration", encoded, RegistrationController.storeRegistration);
module.exports = router;
