var express = require('express');
var st = express.Router();

//Main Stuff
st.get('/', function(req, res){
  //Load the stream viewmodel.
  console.log('Stream viewmodel will be displayed here.');
  res.send('Stream viewmodel will be displayed here.');
  res.end();
});

st.get('/list', function(req, res){
  //Gets the list of favourites for processing.
  console.log('Getting favourites list.');
  res.send('List of Faves.');
  res.end();
});

st.post('/add', function(req, res){
  //Posts to the fave list.
  console.log('Adding to the fave list.');
  res.end();
});

st.delete('/remove', function(req, res){
  //Removes from the fave list.
  console.log('Removing from the fave list.');
  res.end();
});

module.exports = st;
