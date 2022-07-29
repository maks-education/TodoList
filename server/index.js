import express from 'express';
const app = express();

import { client } from './group/loaders/client.js';

import morgan from 'morgan';
import bodyParser from 'body-parser';
import { useCors } from './group/loaders/useCors.js';
import { connectionBase } from './group/loaders/connectBase.js';
import { cookie } from './group/loaders/cookie.js';
import { listeningPort } from './group/loaders/port.js';
import { dist } from './group/loaders/static.js';
import { requestForNotLoggedIn } from './group/API/requestForNotLoggedIn.js';
import { apiRouter } from './routes/index.js';

app.use(morgan('dev'))
app.use(bodyParser.json());
useCors(app)

connectionBase(client)
cookie(app)
listeningPort(app)

dist(app, express)
requestForNotLoggedIn(app)

apiRouter()