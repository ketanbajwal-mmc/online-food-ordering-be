const express = require('express')
const UserController = require('../controllers/usercontroller')
const router = express.Router();
const bcryptjs = require('bcryptjs');

router.get('/', UserController.findAll);
router.get('/:id', UserController.findOne);
router.post('/', UserController.create);
// router.patch('/:id', UserController.update);
// router.delete('/:id', UserController.destroy);


module.exports = router