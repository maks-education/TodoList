import { Router } from "express";
import { AuthController } from "../controllers/auth.js";

export function auth(apiRouter) {
    const router = Router() 
    const authController = new AuthController
    apiRouter.use('/auth', router)

    router.post('', authController.signIn)
    router.post('/register', authController.signUp)
    router.get('/isLoggedIn', authController.isLoggedIn)
    router.delete('/logout', authController.logout)
}