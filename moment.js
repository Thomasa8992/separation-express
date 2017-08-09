var moment = require('moment');
var express = require("express");


function timeStamp(req, res, next){
    var timeStamp = moment().format('MMMM Do YYYY, h:mm:ss a');
    req.body.timeStamp = timeStamp;
    next();
    }

module.exports = timeStamp;