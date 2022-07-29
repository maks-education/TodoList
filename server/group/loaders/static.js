export function dist (app, express) {
    app.use('/', express.static('dist'));
} 