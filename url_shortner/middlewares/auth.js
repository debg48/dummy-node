const {getUser} = require("../services/auth");

async function restrictToLoggedInUserOnly(req,res,next){
    const userUID = req.cookie?.uid;

    if(!userUID) return res.redirect("/login");
    const user = getUser(userUID);

    if(!user) return res.redirect("/login");

    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedInUserOnly,
}