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

    mobileno : {
        type : Number,
        required: true,
        unique : true
    },

    password : {
        type : String,
        required : true
    },

    date : {
        type : Date,
        default : Date.now
    }

}) 

module.exports = mongoose.model('Admin', adminSchema);