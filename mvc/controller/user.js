const User = require("../model/user")

async function handleGetAllUser(req,res){
    const allDbUser = await User.find({});
    return res.json(allDbUser);
}

async function handleGetUserbyId(req,res){
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({error : "User not found !"});
    return res.json(user);
}

async function handleUpdateUserbyId(req,res){
    //this is just for testing purpose
    await User.findByIdAndUpdate(req.params.id,{lastName : "Changed"});
    return res.json({status : "Success"})
}

async function handleDeleteUserbyId(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status : "Success"})
}

async function handleCreateNewUser(req,res){
    const body = req.body;
    if(
        !body || 
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ){
        return res.status(400).json({msg:"All fields reqd!"});
    }
    const result = await User.create({
        firstName : body.first_name ,
        lastName: body.last_name ,
        email : body.email ,
        gender : body.gender ,
        jobTitle: body.job_title
    });
    return res.status(201).json({msg:"success",id : result._id})
}

module.exports = {
    handleGetAllUser,
    handleGetUserbyId,
    handleUpdateUserbyId,
    handleDeleteUserbyId,
    handleCreateNewUser,
};