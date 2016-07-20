exports.spaProxy = function(req, res, next) {
  if (req.path.match(/assets|.*\.css|.*\.js|.*\.png|.*\.jpg|.*\.styl/ig)) {
    next('route');
  }
  else {
    next();
  }
};
