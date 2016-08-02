var express = require('express');
var path = require('path');
var config = require('config');

var server = global.server = express();

// Deliver Static assets
server.use(express.static(path.join(process.cwd() + '/src/client/public')));

// Use app router
server.use(require('./app'));

server.listen(config.get('server.port'), function() {
  console.log('Server started on port %s', config.get('server.port')); // eslint-disable-line no-console
});
