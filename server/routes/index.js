import { Router } from 'express';
import { user } from './user.js';
import { auth } from './auth.js';
import { task } from './task.js';

export function apiRouter() {
    const router = Router();
    auth(router);
    user(router);
    task(router);
    return router;
}
