var express = require('express');
// var bodyParser = require('body-parser');
var foodHandler = require('./requestHandlers/foodHandler');

var app = express();

// app.use(bodyParser());


app.use(express.static(__dirname + '/client'));


app.get('/food', foodHandler);

// app.get('/user', userHandler);

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
});


module.exports = app;
