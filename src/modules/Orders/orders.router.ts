import { Router } from "express";
import { orderController } from "./order.controller";
import { verifyToken } from "../../middleware/verifyToken";
import { isAdminOrSeller } from "../../middleware/isAdminOrSeller.middleware";
import { isSeller } from "../../middleware/seller.middleware";
import { isPermitted } from "../../middleware/checkUserStatus";
import { isAdmin } from "../../middleware/isAdmin.middleware";

const router = Router();

router.get('/my-orders', isPermitted, verifyToken, orderController.getMyOrders);

router.get('/all-orders', isPermitted, isAdmin, orderController.getAllOrders);

router.get('/seller-orders', isPermitted, isSeller, orderController.getAllOrdersBySellerId);

router.post('/', isPermitted, verifyToken, orderController.pleaseOrder);
router.patch('/:orderId', isPermitted, isAdminOrSeller, orderController.trackOrder);
router.get('/:id', isPermitted, verifyToken, orderController.getOrderDetails);

export const orderRouter: Router = router;