const router = require("express").Router();
const ProfileController = require("../controllers/ProfileController");
const checkAuthMiddle = require("../middleware/checkAuthMiddleware");
router.get("/profile", checkAuthMiddle.checkAuth, ProfileController.index);
module.exports = router;
