import { Router } from "express";
import { orderController } from "./order.controller";
import { verifyToken } from "../../middleware/verifyToken";
import { isAdminOrSeller } from "../../middleware/isAdminOrSeller.middleware";
import { isSeller } from "../../middleware/seller.middleware";
import { isPermitted } from "../../middleware/checkUserStatus";

const router = Router()

router.get('/:sellerId', isPermitted, isSeller, orderController.getAllOrdersBySellerId)
router.post('/cart', isPermitted, verifyToken, orderController.addToCard)
router.post('/', isPermitted, verifyToken, orderController.pleaseOrder)
router.patch('/:orderId', isPermitted, isAdminOrSeller, orderController.trackOrder)

export const orderRouter: Router = router;