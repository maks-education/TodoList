const port = process.env.APP_PORT
module.exports.port = port

function listeningPort (app) {
    app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${process.env.PORT || port}`)
  })
} module.exports.listeningPort = listeningPort