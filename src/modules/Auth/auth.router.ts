import { Router } from "express";
import { authController } from "./auth.controller";


const router = Router()

router.post('/regster', authController.regsterUser)
router.post('/login', authController.loginUser)

export const authRouter: Router = router;