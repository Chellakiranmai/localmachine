const products = [
    {
        category:'Electronics',
        subcategory: 'Laptops',
        price: 1000,
        name: 'Macbook',
        id: 001
    },
    {
        category:'Electronics',
        subcategory: 'Smart Phones',
        price: 800,
        name: 'Realme',
        id: 002
    },
    {
        category:'Electronics',
        subcategory: 'Tablets',
        price: 700,
        name: 'Samsung',
        id: 003
    },
    {
        category:'Electronics',
        subcategory: 'TSmart Watches',
        price: 500,
        name: 'Noise',
        id: 004
    }
];

// mongo db

const express = require("express");
//const bodyparser = require("body-parser");
const mongoose = require("mongoose");
//ORM: Object Relational Model

const app = express();
mongoose.connect(
  "mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/test"
);
console.log("connetion succesful");
app.listen(3000, () => {
  console.log("server started at 3000");
});

//Coonect to a database

//const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/basicapi");

const b7User = {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
};

const User=mongoose.model("b7User", b7User);

//const User = mongoose.model("userDetail", user);

app.use(bodyparser.json());

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});


app.post("/adduser",(req,res){
    const newUser=new User({
        name:req.body.name,
        age:req.body.age
    })
    newUser.save(function(err,result){
        if(err){
            console.log("Error")
        }
        else
        req.send("Data updated succesfully")
    })
})