
const groceryProductDetailsModel = require("../Model/groceryModel");

const fs = require('fs');

//import imageType from "image-type";
//const imageType=require('image-type');
exports.GroceryDetailsData =(req, res) => {
    
    console.log("req.body", req.body);
  console.log("req.body", req.body.title);

    let groceryProductList = new groceryProductDetailsModel({
      id: req.body.id,
      title: req.body.title,
      price: req.body.price,
      expiryDate: req.body.expiryDate,
      quantities: [
        {
          first_size: req.body.weightOne,
        },
        {
          second_size: req.body.weightTwo,
        },
      ],

      images: [
        {
          data: req.body.image,
        },
        {
          data: req.body.imageTwo,
        },
      ],
      brandName: req.body.brandName,
      Nutrient_content: req.body.NutrientContent,
      organic: req.body.organic,
      description: req.body.description,
      instock: req.body.InStock,
    });

  groceryProductList.save(); 
 // res.status(201);
        res.send("success");
}