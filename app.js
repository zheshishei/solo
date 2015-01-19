var express = require('express');
// var bodyParser = require('body-parser');
var foodHandler = require('./requestHandlers/foodHandler');

var app = express();

// app.use(bodyParser());


app.use(express.static(__dirname + '/public'));


app.get('/food', foodHandler);

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

module.exports = app;
