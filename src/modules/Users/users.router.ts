import { Router } from "express";
import { userController } from "./user.controller";

const router = Router()

router.get('/', userController.getAllUsers)
router.patch('/:userId', userController.updateUser)

export const userRouter: Router = router;