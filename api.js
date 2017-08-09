var express = require('express');
var chirps = require('./chirps.ctrl');
// var user = require('./user.ctrl');
var router = express.Router();

router.use('/chirps', chirps);
// router.use('/users', user);


module.exports = router;