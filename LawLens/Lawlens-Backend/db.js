const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/lawlens';

const connnectToMongo = ()=>{
    mongoose.connect(URL);
}


module.exports = connnectToMongo;