const mongoose = require("mongoose");

const backpackSchema = new mongoose.Schema({
    "title": "My backpack",
    name: { type: String, required: true },
  });

const Backpack = mongoose.model("backpack", backpackSchema);

module.exports = Customer;