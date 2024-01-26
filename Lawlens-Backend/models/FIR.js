const mongoose = require('mongoose')
const {Schema}  = require('mongoose');

const firSchema = new Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        default : "lastname",
    },

    city : {
        type : String,
        required: true,
    },

    state : {
        type : String,
        required : true
    },

    adharno : {
        type : Number,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    userid : {
        type : Schema.Types.ObjectId,
        ref : 'user'
    },

    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('FIR', firSchema);