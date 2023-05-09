var mongoose = require('mongoose');
var  ROLES  = require('./role');
// const { Role } = require('role.enum');
// import {Role} from '../Role/role.enum';
//  import { SchemaTypes } from 'mongoose';


// const userSchema = new mongoose.Schema({
//     ...,
//     permissions: [String],
//     ...
// });

var schema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        default: ''
    },
    mobile: {
        type: Number,
        default: ''
    },
    role: {
       type: ROLES
    },
    // role:
    //     { 
    //         type: SchemaTypes.String, 
    //         enum: ['Customer', 'VENDOR'], 
    //         default: Role.Customer, 
    //         required: false
    //      },
    
        password: {
        type: String,
        default: ''
     },
     permissions: {
        type: String
     }
     
});

var user = new mongoose.model('User', schema);

module.exports = user;
module.exports.ROLES = ROLES;