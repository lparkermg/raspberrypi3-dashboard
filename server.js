//Require Stuff.
var express = require('express');
var bluetooth = require('./server/bluetooth');
var streams = require('./server/streams');
var path = require('path');

//App Stuff.
var app = express();
app.use('/css',express.static(path.join(__dirname + '/css')));
console.log(__dirname);
app.use('/components',express.static(path.join(__dirname + '/components')));
app.use('/libs',express.static(path.join(__dirname + '/libs')));
app.use('/main.js',express.static(path.join(__dirname + '/main.js')));

//Config Stuff.
const PORT = 5555;

//GET Stuff
app.get('/',function (req, res){
  //Main Admin Page (Load the View)
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/bluetooth', bluetooth);

app.use('/streams', streams);

app.listen(PORT, function(){
  console.log('Test listening on port 5555.');
});
