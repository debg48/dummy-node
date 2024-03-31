const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    return res.json(users);
});

router.get("/:id",(req,res)=>{
    const id = Number(req.params.id); //string hence we convert to Number
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

router.post("/",(req,res)=>{
    const body = req.body;
    users.push({...body,id:users.length+1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err, data)=>{
        return res.json({status : "success" , id : users.length});
    })
});

router.patch("/:id",(req,res)=>{
    //TODO
    return res.json({status : "pending"});
});

router.delete("/:id",(req,res)=>{
    //TODO
    return res.json({status : "pending"});
});

module.exports = router;