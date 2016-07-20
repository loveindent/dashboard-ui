var express = require('express');
var path = require('path');

var server = global.server = express();

// Deliver Static assets
server.use(express.static(path.join(process.cwd() + '/src/client/public')));

// Use app router
server.use(require('./app'))

server.listen(3000);
