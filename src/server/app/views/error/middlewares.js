var template = require('marko').load(require.resolve('./view.marko'));

module.exports = function(err, req, res) {
  res.status(err.status || 500);
  template.render({
    status: res.status,
    message: err.message,
    error: err
  }, res);
}
