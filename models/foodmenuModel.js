const mongoose = require('mongoose');

const foodmenuSchema = mongoose.Schema({
  itemName: {
    required: true,
    type: String,
    // unique: true,
  },
  category: {
    type: String,
    default: "Veg",
  },
  role: {
    type: String,
    required: true,
    default: "Admin",
  },
  vendorName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  foodImage: {
    type: String,
    required: false,
  }

});

const foodmenuModel = mongoose.model("Foodmenu", foodmenuSchema);

module.exports = { foodmenuModel };
