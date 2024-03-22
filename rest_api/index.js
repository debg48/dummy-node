const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

//middleware
app.use(express.urlencoded({extended:false}));


//routes
app.get("/users",(req,res)=>{
    const html = `
    <ul>
        ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})

app.get("/api/users",(req,res)=>{
    return res.json(users);
})

app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id); //string hence we convert to Number
    const user = users.find((user) => user.id === id);
    return res.json(user)
})

app.post("/api/users/",(req,res)=>{
    //TODO
    const body = req.body
    return res.json({status : "pending"});
})

app.patch("/api/users/:id",(req,res)=>{
    //TODO
    return res.json({status : "pending"});
})

app.delete("/api/users/:id",(req,res)=>{
    //TODO
    return res.json({status : "pending"});
})


app.listen(PORT,() => console.log(`Server Started at Port: ${PORT}`));

