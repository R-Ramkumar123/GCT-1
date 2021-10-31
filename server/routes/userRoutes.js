const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers.js");
// const { protect } = require("../middlewares/authMiddleware.js");
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
// router.route("/Myprofile").post(protect, updateUserProfile);

module.exports = router;
