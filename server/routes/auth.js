import { Router } from "express";
import { AuthController } from "../controllers/auth.js";
import {UserService} from "../services/UserService.js";

export function auth(apiRouter) {
    const router = Router() 
    const userService = new UserService()
    const authController = new AuthController(userService)
    apiRouter.use('/auth', router)

    router.post('', authController.signIn.bind(authController))
    router.post('/register', authController.signUp.bind(authController))
    router.get('/isLoggedIn', authController.isLoggedIn)
    router.delete('/logout', authController.logout)
}
