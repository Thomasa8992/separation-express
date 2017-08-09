var moment = require('moment');
var express = require("express");


function timeStamp(req, res, next){
    var timeStamp = moment().format();
    req.body.timeStamp = timeStamp;
    next();
    }

module.exports = timeStamp;