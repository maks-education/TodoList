const session = require("express-session")

function cookie (app){
  app.use(session({
    secret: process.env.SESSION_CREATION_SECRET,
    rolling: true,
    cookie: { 
      secure: false, 
      maxAge: 1000 * 10 * 60 * 60,
    }
  
  }))
}
module.exports.cookie = cookie