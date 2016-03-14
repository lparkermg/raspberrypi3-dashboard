//Require Stuff.
var express = require('express');
var status = express.Router();

//Main Stuff
status.get('/', function(req, res){
  //Will return the json output from the internal gen_stats.sh script
  //below is currently a temp return.
  res.send('{"devName":"pi-face","space":"2% used of 32Gi","hostUpTime":"01:20","btDevStatus":"Unknown","connectedDevice":"None","btConnTime":"N/A"}');
  res.end();
});

module.exports = status;
