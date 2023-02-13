var express = require("express");
var app = express();

// This responds with "Hello World" on the homepage
app.get('/', function (req,res) {
    console.log("There is GET request for the homepage!");
    res.send("Here is the GET Method!")
})

// This responds a POST request for the homepage
app.post('/', function (req,res) {
    console.log("A POST request for the homepage is accessed!");
    res.send("Here is the POST Method!")
})