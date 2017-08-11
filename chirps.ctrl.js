var express = require('express');
var fs = require('fs');
var path = require('path');
var shortid = require('./shortid');
var myMoment = require('./moment')
var chirpsProc = require("./chirps.proc");
var router = express.Router();
var jsonPath = path.join(__dirname, 'data.json');


router.route('/')
    .get(function(req, res){
        chirpsProc.all()
        .then(function (success) {
                res.send(success);
            }, function(err) {
                console.log(err);
                res.sendStatus(500);
            });
    })
    .post(shortid, myMoment, function(req, res){
        chirpsProc.create(req.body)
        .then(function (success) {
                res.send(success);
            }, function(err) {
                console.log(err);
                res.sendStatus(500);
            });
    });
router.route('/one/:id')
    .get(function(req, res) {
        chirpsProc.read(req.params.id)
        .then(function (success) {
                res.send(success);
            }, function(err) {
                console.log(err);
                res.sendStatus(500);
            });
    })
    .put(function(req, res) {
        chirpsProc.update(req.body)
        .then(function (success) {
                res.send(success);
            }, function(err) {
                console.log(err);
                res.sendStatus(500);
            });
    })
    .delete(function(req, res) {
        chirpsProc.destroy(req.params.id)
        .then(function (success) {
                res.send(success);
            }, function(err) {
                console.log(err);
                res.sendStatus(500);
            });
    });
    router.route('/user/:user')
    .get(function(req, res){
        fs.readFile(jsonPath, 'utf-8', function(err, fileContents) {
            if (err) {
                res.statusStatus(500);
            } else {
                var chirps = JSON.parse(fileContents);
                var user = req.params.user;
                var response = chirps.filter(function(chirp) {
                    if(chirp.user){
                        if (chirp.user.toLowerCase().trim() === user.toLowerCase().trim()) {
                            return chirp;
                        }
                    }
                });
                if (response) {
                    res.send(response);
                } else {
                    res.sendStatus(404);
                }
            }
        });
    });


    module.exports = router;