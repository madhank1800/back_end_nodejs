
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./Routers/routes');
const cors = require('cors');
 require("dotenv").config();
const jwt = require("jsonwebtoken");
// const bodyParser = require("body-parser");
const port = 3001;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
try {
  // mongoose.connect("mongodb://127.0.0.1:27017/madhandatabase", options);
     mongoose.connect("mongodb://127.0.0.1:27017/madhandatabase",options);
} catch(error){
  throw new Error("invalid database namae");
  console.log(error);
}
const con = mongoose.connection;
con.on("open", (req, res) => {
  console.log("connected");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

 const corsOptions = {
  AccessControlAllowOrigin: 'http://localhost:3000/',
   origin: true,
   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
 }
app.use(cors(corsOptions));


app.use('/routes', router);
// app.use("/routes", router);
// app.post('/Signin', (request, response) => {
//   response.send('hello world ');
// });

app.listen(port,() => {
  console.log(`server running on ${port}`);
})


