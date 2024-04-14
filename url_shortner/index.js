const express = require("express");
const {connectToMongoDB} = require("./connect")
const urlRoute = require("./routes/url");
const path = require("path");
const URL = require("./models/url");
const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://localhost:27017/short-url').then(()=>console.log("Mongodb Connected"));


app.set("view enngine","ejs");
app.set("views", path.resolve("./views"))

app.use(express.json());

app.get("/",async (req,res)=>{
    const allUrls = await URL.find({});
    return res.render("home.ejs")
});

app.use("/url",urlRoute);

app.get("/:shortId",async (req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },
    { $push:{
        visitHistory : {
            timestamp : Date.now(),
            },
        } ,
    });
    res.redirect(entry.redirectUrl);
});

app.listen(PORT,() => {console.log(`Server Started at Port : ${PORT}`)});
