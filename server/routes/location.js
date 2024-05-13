const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const locationSchema = new mongoose.Schema({
  sightingType: {
    type: String,
    required: true,
  },
  sightingCoordinatesX: {
    type: String,
    required: true,
  },
  sightingCoordinatesY: {
    type: String,
    required: true,
  },
  sightingDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  sightingUser: {
    type: String,
    required: true,
  },
});

const LocationModel = new mongoose.model("Location", locationSchema);

//getting all
router.get("/", async (req, res) => {});

module.exports = router;
