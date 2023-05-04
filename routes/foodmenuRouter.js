const express = require("express");
const UserController = require('../controllers/foodmenuController')

const router = express.Router();

// const {
    // addfoodItem,
//   editCategory,
//   deleteCategory,
//   browseFoodMenu,
//   changeCategoryStatus
// } = require("../controllers/foodmenuController");

/* POST GET categories. */
router.get("/", UserController.browseFoodMenu);

/* POST ADD new category. */
router.post("/", UserController.addfoodItem);

/* POST EDIT new category. */
// router.patch("/:id", editCategory);

/* POST change status new category. */
// router.patch("/change-status/:id", changeCategoryStatus);

/* POST DELETE new category. */
// router.delete("/:id", deleteCategory);

module.exports = router;