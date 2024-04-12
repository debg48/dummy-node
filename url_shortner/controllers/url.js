const shortid = import("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req,res){
    const body = req.body;
    if(!body.url)   return  res.status(400).json({error : "Url is reqd.!"});
    const shortID = (await shortid).generate();
    await URL.create({
        shortId : shortID,
        redirectUrl : body.url,
        visitHistory : [],
    });
    return res.json({id : shortID});
}

async function handleGetAnalytics(req,res){
    const shortId = req.params.shortID;
    const result = await URL.findOne({shortId});
    return res.json({ totalClicks : result.visitHistory.length, 
        analytics : result.visitHistory});
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
};