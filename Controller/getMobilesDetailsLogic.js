const mongoose = require("mongoose");
const mobileDetailsSchema = require("../Model/mobilesModels");

const mobileDetailsList = require("../Controller/MobilesDetailsLogic");
const mobileListMethod = mobileDetailsList.mobilesDetailsSchema;

exports.getMobilesDetailsData = async (req, res) => {
  console.log("request ", req.body);
  console.log("request detail", req.body.productName);
  let list = mongoose.model("mobileDetailsList", mobileListMethod);
  console.log("product details", list);
  // const productName= generalDetails.productName;
  let findDetails = await list.find({'generalDetails.productName':req.body.productName });
  console.log("findDetails", findDetails);
  console.log("findDetails", findDetails);
 
  res.send(findDetails);

};
