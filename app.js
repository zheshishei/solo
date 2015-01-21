var express = require('express');
var bodyParser = require('body-parser');
var foodHandler = require('./requestHandlers/foodHandler');
var placesHandler = require('./requestHandlers/placesHandler');

var app = express();

app.use(bodyParser.json());


app.use(express.static(__dirname + '/client'));
app.get('/css/*', function(req,res) {
  res.sendFile(__dirname + '/client/app' + req.path);
});


app.get('/food', foodHandler);

app.get('/places', placesHandler.GET);
app.post('/places', placesHandler.POST);

// app.get('/user', userHandler);

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
});


module.exports = app;
