//Require Stuff
var express = require('express');
var bt = express.Router();

//Middleware stuffage
bt.use(function timeLog(req,res,next){
  console.log('Time: ', Date.now());
  next();
});

//Main Stuff
//Could probably do this better.
bt.get('/', function(req, res){
  //Load Bluetooth viewmodel.
  console.log('BT Viewmodel will be displayed here.');
});

bt.get('/status', function(req, res){
  //Get the status of the bt module.
  console.log('Get the status of the bt module... Need to decide on what info to include.');
});

bt.get('/scan', function(req, res){
  //Run the scanning function and return the results.
  console.log('Fire off a scan and return the results.');
});

bt.post('/connect', function(req, res){
  //Connect to a shown device.
});

bt.post('/disconnect', function(req, res){
  //Disconnect from the currently connected device.
});

bt.post('/enable', function(req, res){
  //Enables the bluetooth module if it isn't already.
});

bt.post('/disable', function(req, res){
  //Disables the bluetooth module if it isn't already.
});

module.exports = bt;
