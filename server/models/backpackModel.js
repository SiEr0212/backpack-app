const mongoose = require("mongoose");

const backpackSchema = new mongoose.Schema({
    name: { type: String, required: true },
  });