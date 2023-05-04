const mongoose = require("mongoose");

const foodmenuSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});

const foodmenuModel = mongoose.model("Foodmenu", foodmenuSchema);

module.exports = { foodmenuModel };
