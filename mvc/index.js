const express = require("express");
const app = express();
const PORT = 8000;

const userRouter = require("./routes/user")

//middleware
app.use(express.urlencoded({ extended:false }));

app.use("/users",userRouter)

app.listen(PORT,() => console.log(`Server Started at Port: ${PORT}`));
