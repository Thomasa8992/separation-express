var express = require('express');
var fs = require('fs');
var path = require('path');
var shortid = require('./shortid');
var myMoment = require('./moment')
var chirpsProc = require("./chirps.proc");
var router = express.Router();
var jsonPath = path.join(__dirname, 'data.json');

router.route('/')
    .get(function(req, res) {
        fs.readFile(jsonPath, 'utf-8', function(err, fileContents) {
            if (err) {
                res.statusStatus(500);
            } else {
                var chirps = JSON.parse(fileContents);
                var response = chirps.map(function(chirp) {
                        return chirp.user.toLowerCase();
                    })
                    .filter(function(elem, index, self) {
                        return index == self.indexOf(elem);
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
