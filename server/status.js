//Require Stuff.
var express = require('express');
var fs = require('fs');
var bfe = require('better-fs-errors');
var path = require('path');
var exec = require('child_process').exec;
var status = express.Router();


//Variable stuff.
var mainStatus = "";
//Status File loading.
//Main Stuff
status.get('/', function(req, res){
  //Will return the json output from the internal gen_stats.sh script
  //below is currently a temp return.
  res.sendFile(path.join(__dirname, '../data/status.json'));
});

module.exports = status;
