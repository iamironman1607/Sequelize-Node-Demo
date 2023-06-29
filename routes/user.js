const express = require("express");
const router = express.Router();

const UserController = require('../controllers/user');


router.get('/', UserController.getHome);
router.get('/user', UserController.getUser);
router.get('/user/:id', UserController.getUserbyId);

router.post('/user', UserController.postUser);



module.exports = router; 
