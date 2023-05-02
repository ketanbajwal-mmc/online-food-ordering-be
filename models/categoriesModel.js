const mongoose = require("mongoose");

const categoriesSchema = mongoose.Schema({
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

const CategoryModel = mongoose.model("Categories", categoriesSchema);

module.exports = { CategoryModel };
