import { Router } from "express";
import { userController } from "./user.controller";

const router = Router()

router.post('/regster', userController.regsterUser)
router.post('/login', userController.loginUser)

export const userRouter: Router = router;