const express = require('express');
const Router = express.Router();
const { body, validationResult } = require("express-validator");
const signindetails = require('../Controller/signinDetailsLogic');
const logindetails = require('../Controller/loginDetailsLogic');
//const userdetails = require('../Controller/userDetails');
const jwt = require("jsonwebtoken");
require("dotenv").config();
const validBody = [
  body("email").isEmail().toLowerCase(),
  body("lastName").trim(),
];

const validatedBody = function(req, res, next)  {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
          console.log("errors:", errors);
            return res.status(400).json({ errors: errors.array() });
    }
  
    next();
}    
Router.post(
  "/Signin",
  validBody,
  validatedBody,
  signindetails.SigninDetailsData
);
// Router.post("/Signin", signindetails.SigninDetailsData);


Router.post("/login", logindetails.LoginDetailsData);

 
// //const users = [];
// const verifytoken = (req, res, next) => {
//   // if (!req.headers.authorization) {
//   //   return res.status(401).send("Unauthorized request");
//   // }
//   const token = req.headers["auth"].split(" ")[1];
//   console.log("token", token);
//   if (!token) {
//     return res.status(401).send("Access denied. No token provided.");
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.SECRET_KEY);
//     console.log("decoded");
//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(400).send("Invalid token...");
//   }
// };
//Router.get("/userin",verifytoken, userdetails.userinDetailsData);
console.log("tipiri tipiri");
module.exports = Router;