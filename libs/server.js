//Require Stuff.
var express = require('express');
var bluetooth = require('./bluetooth');

//App Stuff.
var app = express();

//Config Stuff.
const PORT = 5555;

//GET Stuff
app.get('/',function (req, res){
  //Main Admin Page (Load the View)
  res.send('THIS IS A TEST!!');
});

app.use('/bluetooth', bluetooth);

app.listen(PORT, function(){
  console.log('Test listening on port #(PORT)(5555)');
});
