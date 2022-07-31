import {requestForNotLoggedIn} from "./requestForNotLoggedIn.js";

export function middlewares(app) {
    requestForNotLoggedIn(app);
}
