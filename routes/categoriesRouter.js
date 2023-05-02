const express = require("express");
const router = express.Router();

const {
  addCategory,
  editCategory,
  deleteCategory,
  browseCategories,changeCategoryStatus
} = require("../controllers/categoriesController");

/* POST GET categories. */
router.get("/", browseCategories);

/* POST ADD new category. */
router.post("/", addCategory);

/* POST EDIT new category. */
router.patch("/:id", editCategory);

/* POST change status new category. */
router.patch("/change-status/:id", changeCategoryStatus);

/* POST DELETE new category. */
router.delete("/:id", deleteCategory);

module.exports = router;
