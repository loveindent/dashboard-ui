var path = require('path');
var express = require('express');
var server = express();

// Deliver Static assets
server.use('/', express.static(path.join(process.cwd() + '/tests/client')));
server.use(express.static(path.join(process.cwd() + '/src')));
server.use('/assets', express.static(path.join(process.cwd() + '/tests/client/assets')));

server.listen(3001);
