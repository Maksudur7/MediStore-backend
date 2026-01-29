import { Router } from "express";
import { orderController } from "./order.controller";
import { verifyToken } from "../../middleware/verifyToken";
import { isAdminOrSeller } from "../../middleware/admin.middleware";

const router = Router()

router.post('/cart', verifyToken, orderController.addToCard)
router.post('/', verifyToken, orderController.pleaseOrder)
router.patch('/:orderId', isAdminOrSeller, orderController.trackOrder)

export const orderRouter: Router = router;