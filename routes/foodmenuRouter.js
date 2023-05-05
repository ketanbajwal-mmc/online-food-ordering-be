const express = require("express");
const foodmenuController = require('../controllers/foodmenuController')

const router = express.Router();

// const {
    // addfoodItem,
//   editCategory,
//   deleteCategory,
//   browseFoodMenu,
//   changeCategoryStatus
// } = require("../controllers/foodmenuController");

/* POST GET  */
router.get("/", foodmenuController.browseFoodMenu);

/* POST ADD  */
router.post("/", foodmenuController.addfoodItem);

/* PATCH EDIT  */
router.patch("/:id", foodmenuController.editfoodItem);

/* POST DELETE  */
router.delete("/:id", foodmenuController.deletefoodItem);

module.exports = router;