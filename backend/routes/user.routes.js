const express = require('express');
const router = express.Router();
const {body}= require("express-validator")
const usercontroller = require("../controllers/controllers")
router.post("/register",[
    body('email').isEmail().withMessage('Invalid meassage')
,
body('fullname.firstname').isLength({min : 3}).withMessage("invalid username"),
body("password").isLength({min : 6}).withMessage("in valid password")
] ,
usercontroller.registerUser )
module.exports= router;