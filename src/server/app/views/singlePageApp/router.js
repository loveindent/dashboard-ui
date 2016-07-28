var config = require('config');
var express = require('express');
var router = express.Router();
var middlewares = require('./middlewares');

var template = require('marko').load(require.resolve('./view.marko'));

router.get('*', middlewares.spaProxy, function(req, res) {
  template.render({title: 'test truc', config: config.get('server')}, res);
});

module.exports = router;
