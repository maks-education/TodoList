export function requestForNotLoggedIn (app) {
    app.use(function (req, res , next) {
    const requestFor_NotLoggedIn = ['/register', '/login', '/isLoggedIn']
    if (req.session.userLogin) {
      next()
    } else if (requestFor_NotLoggedIn.includes(req.url)) {
      next()
    }else {
      res.sendStatus(403)
    }
  })
}
