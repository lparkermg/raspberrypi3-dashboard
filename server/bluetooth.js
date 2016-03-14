//Require Stuff
var express = require('express');
var spawn = require('child_process').spawn;
var bt = express.Router();

//Main Stuff
bt.get('/devices', function(req, res){
  res.end();
});

bt.get('/status', function(req, res){
  //Get the status of the bt module.
  console.log('Get the status of the bt module... Need to decide on what info to include.');
  res.send('Get the status of the bt module... Need to decide on what info to include.');
  res.end();
});

bt.get('/scan', function(req, res){
  //Run the scanning function and return the results.
  console.log('Fire off a scan and return the results.');
  res.send('Fire off a scan and return the results.');
  res.end();
});

bt.post('/connect', function(req, res){
  //Connect to a shown device.
  res.end();
});

bt.post('/disconnect', function(req, res){
  //Disconnect from the currently connected device.
  res.end();
});

bt.post('/enable', function(req, res){
  //Enables the bluetooth module if it isn't already.
  res.end();
});

bt.post('/disable', function(req, res){
  //Disables the bluetooth module if it isn't already.
  res.end();
});

module.exports = bt;
