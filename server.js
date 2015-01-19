var express = require('express');
var http = require('http');
var app = require('./app');
var port = 3000;
http.createServer(app).listen(port);
