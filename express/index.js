// const http = require("http")
const express = require("express")

const app = express();  //app is basically a handler function

app.get('/',(req,res) =>{
    return res.send("Home Page")
} ); //handler ,specify method and path , handler function for hte route

app.get('/about',(req,res) =>{
    return res.send("About Page")
} );

app.listen(8000,() => console.log("Server Started"))

// const myServer = http.createServer(app);

// myServer.listen(8000,() => console.log("Server Started"))