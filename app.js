import express from "express"; //Importing express library
//const http=require('http').Server(app) //creating instance of Express.js app //Choosing port

import { connect, Schema, model } from "mongoose";
const app = express();
connect("mongodb://localhost:27017/crud");

const UserSchema = new Schema({
  name: String,
  age: Number,
});

const UserModel = model("users", UserSchema);

app.get("/getUsers", (req, res) => {
  UserModel.find({})
    .then(function (users) {
      res.json(users);
    })
    .catch(function (err) {
      console.log(err);
    });
});

//Call back function is executed and makes it listen on the specified port
app.listen(3001, () => {
  console.log(`Server is runnning`);
});
