const mongoose = require('mongoose');
const {Schema} = mongoose;

const adminSchema = new Schema({
    adminname : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    address1 : {
        type : String,
        required : true,
        unique : true
    },

    address2 : {
        type : String
    },

    password : {
        type : String,
        required : true
    },

    state : {
        type : String,
        required : true,
    },

    city : {
        type : String,
        required : true,
    },

    zip : {
        type : String,
        required : true
    },

    date : {
        type : Date,
        default : Date.now
    }

}) 

module.exports = mongoose.model('Admin', adminSchema);