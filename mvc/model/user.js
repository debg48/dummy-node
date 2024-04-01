const mongoose =  require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        requried : true,
    },
    lastName :{
        type : String,
        unique : true,
        requred : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    jobTitle : {
        type : String,
    },
    gender : {
        type : String,
    },
});

const User = mongoose.model('user',userSchema)
module.exports = User ;