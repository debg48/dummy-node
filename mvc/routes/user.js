const express = require("express");

const {handleGetAllUser,handleGetUserbyId,handleUpdateUserbyId,handleDeleteUserbyId,handleCreateNewUser} = require("../controller/user")

const router = express.Router();

router.get("/",handleGetAllUser);
router.get("/:id",handleGetUserbyId);
router.post("/",handleCreateNewUser);
router.patch("/:id",handleUpdateUserbyId);
router.delete("/:id",handleDeleteUserbyId);

module.exports = router;