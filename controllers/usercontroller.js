const UserModel = require('../models/user')
const bcryptjs = require('bcryptjs');
// const { Role } = require('../Role');

// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Create and Save a new user
exports.create = async (req, res) => {
   if (!req?.body?.email && !req?.body?.userName && !req?.body?.mobile && !req?.body?.role && !req?.body?.password && !req?.body?.confirm_password ) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
 
    bcryptjs.hash(req.body.password, 10, async function(err, hash) {
        console.log(hash);
        const user = new UserModel({
        email: req.body.email,
        userName: req.body.userName,
        mobile: req.body.mobile,
        role: req.body.role,
        password: hash,
        confirm_password:req.body.confirm_password
    });
    console.log(password, "testing debug func")
    res.setHeader('Content-Type', 'application/json');
    // await user.save();
    await user.save().then(data => {
        res.json({
            message:"User created successfully!!",
            userData: data
            
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    });
});
};