var express = require("express");
var bodyParser = require("body-parser");
var api = require("./api");
var path = require("path");
var jsonPath = path.join(__dirname, 'data.json');
var clientPath = path.join(__dirname, 'client');

var app = express();
app.use(bodyParser.json());
app.use("/api", api); 
app.use(express.static(clientPath));


app.listen(3000, function(){
    console.log("server starter");
});

