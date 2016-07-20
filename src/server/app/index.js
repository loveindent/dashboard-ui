var express = require('express');
var app = express.Router();
var views = require('./views');

app.use(views.singlePageApp);
app.use(views.error);

module.exports = app;
