const mongoose = require('mongoose');

const userSchema=   mongoose.Schema({
    storeid:{
        type:String,
        required:true,
        unique:true
    }
})

const userModel=mongoose.model("user", userSchema)

module.exports=userModel