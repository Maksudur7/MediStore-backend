import { Router } from "express";
import { userController } from "./user.controller";
import { isAdmin } from "../../middleware/isAdmin.middleware";
import { isPermitted } from "../../middleware/checkUserStatus";

const router = Router()

router.get('/admin/stats', isPermitted, isAdmin, userController.getAdminStats)
router.get('/seller/stats', isPermitted, userController.getSellerStats)

router.get('/', isAdmin, userController.getAllUsers)
router.patch('/:id/role', isPermitted, isAdmin, userController.updateUserByAdmin)
router.patch('/:id', isPermitted, userController.updateUser)
router.delete('/:id', isPermitted, isAdmin, userController.deleteUserByAdmin)

export const userRouter: Router = router;