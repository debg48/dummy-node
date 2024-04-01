const User = require("../model/user")
async function handleGetAllUSer(req,res){
    const allDbUser = await User.find({});
    return res.json(allDbUser);
}
module.export = {
    handleGetAllUSer,
};