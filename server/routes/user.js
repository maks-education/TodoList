import { Router } from "express";
import { UserController } from "../controllers/user.js";

export function user(apiRouter) {
    const router = Router()
    const userController = new UserController()
    apiRouter.use('/user', router)

    router.get('', userController.profile)
}
