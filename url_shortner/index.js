const express = require("express");
const {connectToMongoDB} = require("./connect")
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter")
const path = require("path");
const URL = require("./models/url");
const app = express();
const PORT = 8001;
require("dotenv").config();

connectToMongoDB(process.env.MONGO_URL).then(()=>console.log("Mongodb Connected"));


app.set("view engine","ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());

app.use("/url",urlRoute);
app.use("/",staticRoute);

// app.get("/",async (req,res)=>{
//     const allUrls = await URL.find({});
//     // console.log(allUrls);
//     return res.render("home.ejs",{ urls : allUrls });
// });



app.get("/url/:shortId",async (req,res)=>{
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
