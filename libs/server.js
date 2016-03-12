//Require Stuff.
var express = require('express');
var bluetooth = require('./bluetooth');
var streams = require('./streams');

//App Stuff.
var app = express();
app.set('view engine','jade');
//Config Stuff.
const PORT = 5555;

//GET Stuff
app.get('/',function (req, res){
  //Main Admin Page (Load the View)
  res.send('This will be the main landing page.');
});

app.use('/bluetooth', bluetooth);

app.use('/streams', streams);

app.listen(PORT, function(){
  console.log('Test listening on port 5555.');
});
