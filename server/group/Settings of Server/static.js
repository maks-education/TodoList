function dist (app, express) {
    app.use('/', express.static('dist'));
} module.exports.dist = dist