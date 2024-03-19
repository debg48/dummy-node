const http = require("http")
const express = require("express")

const app = express();  //app is basically a handler function

app.get('/',(req,res) =>{
    return res.send("Home Page")
} ); //handler ,specify method and path , handler function for hte route

app.get('/about',(req,res) =>{
    return res.send("About Page")
} );

const myServer = http.createServer(app);

myServer.listen