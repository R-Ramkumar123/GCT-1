// const expressAsyncHandler = require("express-async-handler");
const Profile = require("../models/profileModel.js");

// const getProfiles = expressAsyncHandler(async (req, res) => {
//   const profiles = await Profile.find({ user: req.user._id });
//   res.json(profiles);
// });

// const createProfile = expressAsyncHandler(async (req, res) => {
//   const { email, skills, pic } = req.body;

//   if (!email || !skills) {
//     res.status(400);
//     throw new Error("Please fill all the fields");
//   } else {
//     const profile = new Profile({ user: req.user._id, email, skills, pic });

//     const createdProfile = await profile.save();

//     res.status(201).json(createdProfile);
//   }
// });

// const getProfileById = expressAsyncHandler(async (req, res) => {
//   const profile = await Profile.findById(req.params.id);

//   if (profile) {
//     res.json(profile);
//   } else {
//     res.status(404).json({ message: "Profile not found" });
//   }
// });

// const updateProfile = expressAsyncHandler(async (req, res) => {
//   const { email, skills, pic } = req.body;

//   const profile = await Profile.findById(req.params.id);

//   if (profile.user.toString() !== req.user._id.toString()) {
//     res.status(401);
//     throw new Error("You can't perform this action");
//   }

//   if (profile) {
//     (profile.email = email), (profile.skills = skills), (profile.pic = pic);

//     const updatedProfile = await profile.save();
//     res.json(updatedProfile);
//   } else {
//     res.status(404);
//     throw new Error("Profile not found");
//   }
// });

// module.exports = { getProfiles, createProfile, getProfileById, updateProfile };

const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();

    res.status(200).json(profiles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createProfile = async (req, res) => {
  const profile = req.body;

  const newProfile = new Profile(profile);

  try {
    await newProfile.save();

    res.status(201).json(newProfile);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getProfiles, createProfile };
