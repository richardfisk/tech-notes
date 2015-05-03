var express = require('express');
var Promise = require('bluebird'); // Require 'bluebird' in your package.json file, and run npm install.
var fs = require('fs');
var path = require('path');
var marked = require('marked');

var app = express();

Promise.promisifyAll(fs);

app.use(express.static('dist'));

var port = process.env.PORT || 80;
app.listen(port);