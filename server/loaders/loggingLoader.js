import morgan from "morgan";

export function loggingLoader(app) {
    app.use(morgan('dev'))
}
