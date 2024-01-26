const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },

    adharno : {
        type : Number,
        required: true,
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

module.exports = mongoose.model('User', userSchema);