// const express = require("express");

// const {
//   getProfiles,
//   createProfile,
//   getProfileById,
//   updateProfile,
// } = require("../controllers/profileControllers.js");
// const { protect } = require("../middlewares/authMiddleware.js");

// const router = express.Router();

// router.route("/").get(protect, getProfiles);
// router.route("/create").post(protect, createProfile);
// router.route("/:id").get(getProfileById).put(protect, updateProfile);
// // .delete();

// module.exports = router;

const express = require("express");
const {
  getProfiles,
  createProfile,
} = require("../controllers/profileControllers.js");

const router = express.Router();

router.get("/", getProfiles);
router.post("/", createProfile);

module.exports = router;
