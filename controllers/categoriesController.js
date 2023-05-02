const { CategoryModel } = require("../models/categoriesModel");

const browseCategories = async (req, res) => {
  const categories = await CategoryModel.find({
    isActive: true,
  });

  res.status(200).json({
    success: true,
    categories: categories,
  });
};

const addCategory = async (req, res) => {
  const name = req.body.name;
  const image = req.body.image;
  const description = req.body.description;
  if (!name) {
      return res.status(422).json({
      name: "name is required",
    });
  }
  if (!image) {
    return res.status(422).json({
      image: "image is required",
    });
  }
  if (!description) {
    return res.status(422).json({
      description: "Description is required",
    });
  }

  const newCategory = await new CategoryModel({
    name,image,description
  }).save();

  res.status(200).json({
    success: true,
    category: newCategory,
  });
};

const editCategory = async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const image = req.body.image;
  const description = req.body.description;
  if (!id) {
    return res.status(422).json({
      id: "Required",
    });
  }

  if (!name) {
    return res.status(422).json({
      name: "Required",
    });
  }
  if (!image) {
    return res.status(422).json({
      image: "image is required",
    });
  }
  if (!description) {
    return res.status(422).json({
      description: "Description is required",
    });
  }
  const updatedCategory = await CategoryModel.findByIdAndUpdate(
    id,
    {
      name: name,image: image,description: description,
    },
    {
      new: true,
    }
  );

  res.status(200).json({
    success: true,
    category: updatedCategory,
  });
};

const changeCategoryStatus = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(422).json({
      id: "Required",
    });
  }

  const category = await CategoryModel.findById(id);
if(category){  
  const isActive = !category.isActive
  const updatedCategory = await CategoryModel.findByIdAndUpdate(
    id,
    {
      isActive: isActive,
    },
    {
      new: true,
    }
  );

  res.status(200).json({
    success: true,
    category: updatedCategory,
  });
}
  
};

const deleteCategory = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(422).json({
      id: "Required",
    });
  }


  await CategoryModel.findByIdAndDelete(
    id,
  );

  res.status(200).json({
    success: true,
  });

  
};


module.exports = {
  addCategory,
  editCategory,
  deleteCategory,
  browseCategories,changeCategoryStatus
};
