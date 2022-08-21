import express from 'express';
import {loaders} from "./loaders/index.js";
import { User} from "./models/User.js";

function startServer() {
    const app = express();
    loaders(app)
}

startServer();
