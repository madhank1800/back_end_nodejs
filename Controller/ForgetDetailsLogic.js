
const express = require('express');
const mongoose = require('mongoose');
const signinDetailsSchema = require("../Model/model");
const bcrypt = require("bcrypt");
exports.ForgetDetailsData =async (req, res) => {
    console.log("request", req.body);
    let filter = { email: req.body.email };
    const update = req.body.newPassword;
    console.log("updatae", update);
    let hash =await  bcrypt.hash(update, 10);
    console.log("hashing", hash);
    const updatePasswordValue = {password:hash,confirmPassword:hash};
     
    let ForgetChangeValue =await signinDetailsSchema.findOneAndUpdate(
      filter,
      updatePasswordValue,
      {
        new: true,
        rawResult: true,
      }
    );
    console.log("forgetChangeValue", ForgetChangeValue);

    res.json("password changed");
}