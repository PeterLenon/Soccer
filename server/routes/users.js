const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const express = require("express");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateJoined: {
    type: Date,
    required: true,
  },
});

const UserModel = new mongoose.model("User", userSchema);

//getting all
router.get("/", async (req, res) => {});

module.exports = router;
