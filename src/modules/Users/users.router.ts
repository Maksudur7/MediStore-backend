import { Router } from "express";
import { userController } from "./user.controller";
import { isAdmin } from "../../middleware/isAdmin.middleware";
import { isPermitted } from "../../middleware/checkUserStatus";

const router = Router()

router.get('/', isAdmin, userController.getAllUsers)

// admin can update any user
router.patch('/:userId', isPermitted, isAdmin, userController.updateUserByAdmin)
router.patch('/:userId', isPermitted, userController.updateUser)

export const userRouter: Router = router;