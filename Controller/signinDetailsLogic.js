const signinDetailsSchema = require("../Model/model");
const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
//const signinList = signinList;
console.log("mad1");
//const signinList = signinList;

exports.SigninDetailsData =async (req, res) => {
  // let hashing;

  //console.log(req.body.firstname);
   console.log(req.body.email);
  console.log(req.body);
  console.log(req.body.password);
  
  //checking user already existed or not.
 let findingValue = await signinDetailsSchema.find({
  //  firstname: req.body.firstname,
   email:req.body.email,
 });
 console.log("findingValue", findingValue);
  if (
    findingValue[0] !== undefined &&
    findingValue[0].email === req.body.email
  ) {
    console.log("user already existed");
    res.send("user already existed");
  } else {


  
// saving the user signup details in database.
    const hash = bcrypt
      .hash(req.body.password, 10)
      .then(function (hash) {
        console.log("hash:", hash);
        console.log("hash1:", typeof hash);
        // hashing = hash;
        let signinList = new signinDetailsSchema({
          firstname: req.body.firstname,
          lastName: req.body.lastName,
          email: req.body.email,
          phone: req.body.phone,
          password: hash,
          confirmPassword: hash,
        });
        console.log("inside :", req.body);

        signinList.save();
      
    
    
      
      
    
      
      
      
      
      
      
        console.log(req.body);
        res.send("signed up succesfully");
        
      });
  }
  
  //    let findingValue = await signinDetailsSchema.find({
  //      firstname: req.body.firstname,
  //    });
  //    console.log("findingValue", findingValue);
  // if (findingValue[0] !== undefined && findingValue[0].firstname === req.body.firstname) {
  //   res.send("user already existed");
  // }  //  } else {
    //    console.log(req.body);
       
    //       signinList.save();
    //        res.send("signed up succesfully");
    //  }
   
  
  // console.log(req.body.firstname);
  // console.log(req.body);
  // let signinList = new signinDetailsSchema({
  //   firstname: req.body.firstname,
  //   lastName: req.body.lastName,
  //   email: req.body.email,
  //   phone: req.body.phone,
  //   password:hashing,
  //   confirmPassword: req.body.confirmPassword,
  // });
  //signinList.save();
  // console.log("mad2");
  //console.log(req.body);
  

 // signinList.save();
  //res.send("signed up succesfully");


  //res.send("signed up succesfully");

  // res.send("details uploaded succesfully");
}