
const mongoose = require('mongoose');


const groceryDetailsSchema = new mongoose.Schema({
  id: { type: Number },
  title: { type: String },
  price: { type: Number },
  expiryDate: { type: Date },
  quantities: [
    {
      first_size: { type: String },
    },
    {
      second_size: { type: String },
    },
  ],
  images: [
    {
      data: { type: String },
    },
    {
      data: { type: String },
      
    },
  ],
  brandName: { type: String },
  Nutrient_content: { type: String },
  organic: { type: String },
  description: { type: String },
  instock:{type:String}
});


 module.exports = mongoose.model("groceryDetailsList", groceryDetailsSchema);