const express = require("express");

const app = express();
const PORT = 8000

//route

app.listen(PORT,() => console.log(`Server Started at Port: ${PORT}`)) 

