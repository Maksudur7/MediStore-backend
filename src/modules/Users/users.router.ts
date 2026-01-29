import { Router } from "express";
import { userController } from "./user.controller";
import { isAdmin } from "../../middleware/isAdmin.middleware";
import { isPermitted } from "../../middleware/checkUserStatus";

const router = Router()

router.get('/', isAdmin, userController.getAllUsers)
router.patch('/:id', isPermitted, isAdmin, userController.updateUserByAdmin)
router.patch('/:id', isPermitted, userController.updateUser)

export const userRouter: Router = router;