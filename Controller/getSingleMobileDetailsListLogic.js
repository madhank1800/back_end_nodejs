const mongoose = require("mongoose");
const mobileDetailsSchema = require("../Model/mobilesModels");

const mobileDetailsList = require("../Controller/MobilesDetailsLogic");
const mobileListMethod = mobileDetailsList.mobilesDetailsSchema;

exports.getSingleMobilesDetailsData = async (req, res) => {
  //  const id = req.params.id;
  console.log("request ", req.body);
  console.log("request detail", req.params.id);
  let list = mongoose.model("mobileDetailsList", mobileListMethod);
  console.log("product details", list);
  // const productName= generalDetails.productName;
  let findDetails = await list.findOne({
    "generalDetails.id": req.params.id,
  });
  console.log("findDetails", findDetails);
  console.log("findDetails", findDetails);

  res.send(findDetails);
};
