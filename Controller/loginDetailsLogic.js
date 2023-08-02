const express = require("express");
const signinDetailsSchema = require("../Model/model");
const signin = require("../Controller/signinDetailsLogic");
const signinList = signin.signinList;
const jwt = require("jsonwebtoken");

const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

exports.LoginDetailsData = async (req, res) => {
  //  console.log("hai tutu", req);
  console.log(req.body);
  // console.log(req);
  const user = req.body;
  let login = mongoose.model("signinDetails", signinList);
  console.log("login:", login);

  let details = await login.findOne({
    //firstname: req.body.email
    email:req.body.email
  });
  console.log("inside :", req.body);
  console.log("details", details);
  // console.log("details", details[0].password);
  //const hash = details[0].password;
//, { expiresIn: "1h", }
  if (details === null) {
    console.log("failed");
    res.send("enter correct details");
  } else {
  
    console.log("details", details.password);
    const hash = details.password;
    const myPlaintextPassword = req.body.password;
    console.log("myPlaintextPassword", myPlaintextPassword);

    const match = bcrypt.compare(myPlaintextPassword, hash);
    console.log("match", match);
    match.then((result) => {
      let response = result;

      console.log("result", result);
      if (response === true) {
        console.log("success");
        //create token
        const token = jwt.sign({ user }, process.env.SECRET_KEY);
        console.log("token", token);
        // res.json({ token });
        res.send({ token: token, name: details.firstname });
        // res.send("succesfully sent");
      } else {
        console.log("failed");
        res.send("enter correct details");

      }
    });
  }
  // res.send(details);
};
