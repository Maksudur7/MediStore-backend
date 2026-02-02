import { Router } from "express";
import { orderController } from "./cart.controller";
import { verifyToken } from "../../middleware/verifyToken";
import { isPermitted } from "../../middleware/checkUserStatus";

const router = Router()

router.post('/', isPermitted, verifyToken, orderController.addToCard)
router.get('/', isPermitted, verifyToken, orderController.getCartByUserId)
router.patch('/:id', isPermitted, verifyToken, orderController.updateOrder)
router.delete('/:orderId', isPermitted, verifyToken, orderController.deletOrder)

export const cartRouter: Router = router;