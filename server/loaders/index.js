import {apiRouter} from "../routes/index.js";
import {loggingLoader} from "./loggingLoader.js";
import {bodyParsersLoader} from "./bodyParsersLoader.js";
import {useCors} from "./useCors.js";
import {connectionBase} from "./connectBase.js";
import {cookie} from "./cookie.js";
import {dist} from "./static.js";
import {listeningPort} from "./port.js";
import {configLoader} from "./configLoader.js";
import {middlewares} from "../middlwares/index.js";

export function loaders(app) {
    configLoader();
    loggingLoader(app);
    bodyParsersLoader(app);
    useCors(app);
    connectionBase();
    cookie(app);
    dist(app);
    middlewares(app);
    apiRouter(app);
    listeningPort(app);
}
