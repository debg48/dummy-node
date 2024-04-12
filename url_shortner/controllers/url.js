const { nanoid} = require("nanoid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req,res){
    const body = req.body;
    if(!body.url)   return  res.status(400).json({error : "Url is reqd.!"});
    const shortID = nanoid(8);
    await URL.create({
        shortId : shortID,
        redirectUrl : body.url,
        visitHistory : [],
    });
    return res.json({id : shortID});
}

module.exports = {
    handleGenerateNewShortURL,
};