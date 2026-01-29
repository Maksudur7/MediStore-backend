import { Router } from "express";
import { orderController } from "./order.controller";
import { verifyToken } from "../../middleware/verifyToken";
import { isAdminOrSeller } from "../../middleware/admin.middleware";
import { isSeller } from "../../middleware/seller.middleware";

const router = Router()

router.get('/:sellerId', isSeller, orderController.getAllOrdersBySellerId)
router.post('/cart', verifyToken, orderController.addToCard)
router.post('/', verifyToken, orderController.pleaseOrder)
router.patch('/:orderId', isAdminOrSeller, orderController.trackOrder)

export const orderRouter: Router = router;