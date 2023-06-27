const express = require("express");
const router = express.Router();
const UserController = require('../controllers/user');


router.get("/", UserController.getHome);
router.get("/data", UserController.getHome);



module.exports = router; 
