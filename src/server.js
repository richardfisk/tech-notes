var express = require('express');
var Promise = require('bluebird'); // Require 'bluebird' in your package.json file, and run npm install.
var fs = require('fs');
var path = require('path');
var marked = require('marked');

var app = express();

Promise.promisifyAll(fs);

app.get('/blog/:id', function (req, res) {
    var parseMarkdown = function(val) {
        res.send(marked(val.toString()));
    };
    fs.readFileAsync(path.join(__dirname, '../markdown/' + req.params.id)).then(parseMarkdown);
});

var port = process.env.PORT || 80;
app.listen(port);