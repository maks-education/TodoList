import { Router } from 'express';
import { user } from './user.js';
import { auth } from './auth.js';
import { task } from './task.js';

export function apiRouter(app) {
    const router = Router();
    app.use('/api', router);
    auth(router);
    user(router);
    task(router);
    return router;
}
