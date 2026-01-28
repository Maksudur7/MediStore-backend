import { Router } from "express";
import { orderController } from "./order.controller";
import { verifyToken } from "../../middleware/verifyToken";

const router = Router()

router.post('/cart', verifyToken , orderController.addToCard)
router.post('/', verifyToken ,orderController.pleaseOrder)
router.patch('/:orderId', orderController.trackOrder)

export const orderRouter: Router = router;