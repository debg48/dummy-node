const http = requires("http");

const myServer = http.createServer((req,res)=>){
    console.log("New Request Received")
}