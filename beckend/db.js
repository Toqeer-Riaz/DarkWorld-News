const mongoose = require('mongoose');
const url="mongodb://localhost:27017/newsinfo?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo=function(){
    mongoose.connect(url,function(){
        console.log("mongoos connect sucessfuly...")
    })
}
module.exports=connectToMongo