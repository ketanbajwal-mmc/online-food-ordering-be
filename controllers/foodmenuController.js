const { foodmenuModel } = require("../models/foodmenuModel");

const browseFoodMenu = async (req, res) => {
  const foodItem = await foodmenuModel.find({
    // isActive: true,
  });

  res.status(200).json({
    success: true,
    foodMenuAll: foodItem,
  });
};

const addfoodItem = async (req, res) => {
    // const user = new foodmenuModel({
    //     itemName: req.body.itemName,
    //     category: req.body.category,
    //     role: req.body.role,
    //     price: req.body.price
    // });

  const itemName = req.body.itemName;
  const category = req.body.category;
  const role = req.body.role;
  const vendorName = req.body.vendorName;
  const price = req.body.price;
  const foodImage = req.body.foodImage;
  const description = req.body.description;
  
  //428 STATUS - UNPROCESSABLE CONTENT 
  if (!itemName) {
    return res.status(428).json({itemName: "itemName is required",});}
  if (!category) {
    return res.status(422).json({image: "category is required",});}
  if (!role) {
    return res.status(422).json({role: "role is required",});}
  if (!vendorName) {
    return res.status(422).json({vendorName: "vendorName is required",});}
  if (!price) {
    return res.status(422).json({price: "price is required",});}
  if (!description) {
    return res.status(422).json({description: "Description is required",});}
//   if (!foodImage) {
//     return res.status(422).json({foodImage: "foodImage is required",});
//   }

  const newfoodItem = await new foodmenuModel({
    itemName,category,description,foodImage,price,vendorName,role}).save();

  res.status(200).json({
    success: true,
    foodMenuAll: newfoodItem,
  });
};

const editfoodItem = async (req, res) => {
 // const user = new foodmenuModel({
    //     itemName: req.body.itemName,
    //     category: req.body.category,
    //     role: req.body.role,
    //     price: req.body.price
    // });
    const id = req.params.id;

    const itemName = req.body.itemName;
    const category = req.body.category;
    const role = req.body.role;
    const vendorName = req.body.vendorName;
    const price = req.body.price;
    const foodImage = req.body.foodImage;
    const description = req.body.description;
    //428 STATUS - UNPROCESSABLE CONTENT 
    if (!itemName) {
      return res.status(428).json({itemName: "itemName is required",});}
    if (!category) {
      return res.status(422).json({image: "category is required",});}
    if (!role) {
      return res.status(422).json({role: "role is required",});}
    if (!vendorName) {
      return res.status(422).json({vendorName: "vendorName is required",});}
    if (!price) {
      return res.status(422).json({price: "price is required",});}
    if (!description) {
      return res.status(422).json({description: "Description is required",});}
  //   if (!foodImage) {
  //     return res.status(422).json({foodImage: "foodImage is required",});
  //   }
  const updatefoodItem = await foodmenuModel.findByIdAndUpdate(
    id,
    {itemName: itemName,category: category,description:description,
     foodImage: foodImage,price: price,vendorName: vendorName,role:role,},
    {new: true,});

  res.status(200).json({
    success: true,
    foodMenuAll: updatefoodItem,
  });
};

const deletefoodItem = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(422).json({
      id: "Required",
    });
  }
  await foodmenuModel.findByIdAndDelete(id,);
  res.status(200).json({
    success: true,
  });
};

module.exports = {
  addfoodItem,
  editfoodItem,
  deletefoodItem,
  browseFoodMenu,
};