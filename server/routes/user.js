import { Router } from "express";
import { UserController } from "../controllers/user.js";
import { UserService } from "../services/UserService.js";

export function user(apiRouter) {
    const router = Router()
    const userService = new UserService()
    const userController = new UserController(userService)
    apiRouter.use('/user', router)

    router.get('', userController.userData.bind(userController))
}
