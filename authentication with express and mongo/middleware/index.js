function loggedOut(req, res, next) {
  if(req.session && req.session.userId) {
    return res.redirect(`/profile`);
  }
  return next();
}

function loggedIn(req, res, next) {
  if(req.session && req.session.userId) {
    return next();
  } else {
    var err = new Error(`You must be logged in to view this page`)
    err.status = 403
    return next(err)
  }
}

module.exports.loggedOut = loggedOut
module.exports.loggedIn = loggedIn
