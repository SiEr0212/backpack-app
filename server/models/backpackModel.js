const mongoose = require("mongoose");

const backpackSchema = new mongoose.Schema({
  
 /*  weight: { type: Number }, */
  name: { type: String, required: true },
});

const Backpack = mongoose.model("backpack", backpackSchema);

module.exports = Backpack;
