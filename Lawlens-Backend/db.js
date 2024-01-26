const mongoose = require('mongoose');

const URL = 'mongodb+srv://krishna:ZaInezvHzMGWa85W@cluster0.arkgorx.mongodb.net/';
  
const connnectToMongo = ()=>{
    mongoose.connect(URL); 
}


module.exports = connnectToMongo;