
const mongoose = require('mongoose');
// import mongoose from "mongoose";
 const { Schema } = mongoose;
const bcrypt = require("bcrypt");
 


 const signinDetailsSchema = new  mongoose.Schema({

    firstname: { type: String },
    lastName: { type: String },
    email: { type: String },
    phone: { type: String },
    password: { type: String },
    confirmPassword: { type: String },
  });

 module.exports=mongoose.model("signinDetails", signinDetailsSchema);
