var path = require('path');
var express = require('express');

var app = express();

app.use('/', express.static(path.join(__dirname, 'public')));


var server = app.listen(8000);

console.log("Server is now listening on 8000");
