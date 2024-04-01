const express = require("express");
const app = express();
const PORT = 8000;

const {connectMongoDb} = require("./connection");
const userRouter = require("./routes/user");
const {logReqRes} = require("./middlewares/");

//connection
connectMongoDb(" mongodb://127.0.0.1:27017/mvc_test");

//middleware
app.use(express.urlencoded({ extended:false }));
app.use(logReqRes("log.txt"))

app.use("/users",userRouter)

app.listen(PORT,() => console.log(`Server Started at Port: ${PORT}`));
