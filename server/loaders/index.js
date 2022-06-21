import {corsLoader} from "./corsLoader";

export function loaders(app) {
    corsLoader(app)
    dbLoader()
    routerLoader()
}
