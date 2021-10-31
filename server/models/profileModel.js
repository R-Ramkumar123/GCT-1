const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    // unique: true,
  },
  skills: [String],
  pic: {
    type: String,
    required: true,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9uvF65nH7m-aoxHulInp9xFBJjZsuZuOw1w&usqp=CAU",
  },
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: "User",
  // },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
