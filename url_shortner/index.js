const express = require("express");
const {connectToMongoDB} = require("./connect");
const cookieParser = require("cookie-parser");
const path = require("path");
const {checkForAuthentication,restrictTo} = require("./middlewares/auth");
const URL = require("./models/url");

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");

const app = express();
const PORT = 8001;
require("dotenv").config();

connectToMongoDB(process.env.MONGO_URL).then(()=>console.log("Mongodb Connected"));


app.set("view engine","ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(checkForAuthentication);

app.use("/url",restrictTo(['NORMAL']),urlRoute);
app.use("/user",userRoute);
app.use("/",staticRoute);

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
