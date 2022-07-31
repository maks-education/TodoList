import bodyParser from 'body-parser';

export function bodyParsersLoader(app) {
    app.use(bodyParser.json());
}
